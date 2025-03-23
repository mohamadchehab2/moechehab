'use server'

export async function subscribeToNewsletter(email: string) {
  try {
    const response = await fetch('https://api.beehiiv.com/v2/publications/pub_0c836aa9-d3e6-423f-89a0-905f0f7ac9e0/subscriptions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.BEEHIIV_API_KEY}`,
      },
      body: JSON.stringify({
        email,
        reactivate_existing: true,
        utm_source: 'website',
        utm_medium: 'newsletter',
        utm_campaign: 'homepage',
      }),
    })

    if (!response.ok) {
      const errorBody = await response.json()
      console.error('Newsletter API error:', {
        status: response.status,
        statusText: response.statusText,
        body: errorBody
      })
      throw new Error(`Failed to subscribe: ${response.status} ${response.statusText}`)
    }

    return { success: true }
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to subscribe to newsletter'
    }
  }
}