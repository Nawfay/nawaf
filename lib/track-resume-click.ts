export async function trackResumeClick() {
  try {
    await fetch('/api/resume', {
      method: 'POST',
    })
  } catch (error) {
    console.error('Failed to track resume click:', error)
  }
}
