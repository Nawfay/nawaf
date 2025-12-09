import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(request: NextRequest) {
  try {
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL

    if (!webhookUrl) {
      return NextResponse.json(
        { error: 'Discord webhook URL not configured' },
        { status: 500 }
      )
    }

    // Get user info from request
    const userAgent = request.headers.get('user-agent') || 'Unknown'
    const referrer = request.headers.get('referer') || 'Direct'
    const acceptLanguage = request.headers.get('accept-language') || 'Unknown'
    const timestamp = new Date().toISOString()
    const formattedTimestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/Toronto',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true
    })
    
    // Get IP address
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               request.headers.get('cf-connecting-ip') || 
               'Unknown'

    // Get location data from IP
    let locationData = {
      city: 'Unknown',
      region: 'Unknown',
      country: 'Unknown',
      coordinates: 'Unknown',
      isp: 'Unknown'
    }

    try {
      const geoResponse = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,regionName,city,lat,lon,isp,query`)
      if (geoResponse.ok) {
        const geoData = await geoResponse.json()
        if (geoData.status === 'success') {
          locationData = {
            city: geoData.city || 'Unknown',
            region: geoData.regionName || 'Unknown',
            country: geoData.country || 'Unknown',
            coordinates: geoData.lat && geoData.lon ? `${geoData.lat}, ${geoData.lon}` : 'Unknown',
            isp: geoData.isp || 'Unknown'
          }
        }
      }
    } catch (geoError) {
      console.error('Error fetching location data:', geoError)
    }
    
    // Send notification to Discord
    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [
          {
            title: '📄 Resume Clicked',
            description: 'Someone clicked on your resume link!',
            color: 0x5865f2, // Discord blurple color
            fields: [
              {
                name: 'IP Address',
                value: ip,
                inline: true,
              },
              {
                name: 'Timestamp',
                value: formattedTimestamp,
                inline: true,
              },
              {
                name: '📍 Location',
                value: `${locationData.city}, ${locationData.region}, ${locationData.country}`,
                inline: true,
              },
              {
                name: 'Coordinates',
                value: locationData.coordinates,
                inline: true,
              },
              {
                name: 'ISP',
                value: locationData.isp,
                inline: true,
              },
              {
                name: 'User Agent',
                value: userAgent.substring(0, 100),
                inline: false,
              },
              {
                name: 'Referrer',
                value: referrer,
                inline: true,
              },
              {
                name: 'Language',
                value: acceptLanguage.split(',')[0] || 'Unknown',
                inline: true,
              },
            ],
            timestamp: timestamp,
          },
        ],
      }),
    })

    if (!discordResponse.ok) {
      throw new Error('Failed to send Discord notification')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending Discord notification:', error)
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { status: 500 }
    )
  }
}
