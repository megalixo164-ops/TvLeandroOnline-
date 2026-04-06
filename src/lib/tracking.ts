/**
 * Helper function to track events via both Meta Pixel (Browser) and Conversions API (Server).
 */
export const trackPixelEvent = async (eventName: string, params?: object) => {
  const eventId = `event_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

  // 1. Browser Event (Meta Pixel)
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, params, { eventID: eventId });
  }

  // 2. Server Event (Facebook Conversions API via our backend)
  try {
    const response = await fetch('/api/fb-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        eventId,
        customData: params,
      }),
    });

    if (!response.ok) {
      console.warn('Failed to send CAPI event to backend');
    }
  } catch (error) {
    console.error('Error calling CAPI endpoint:', error);
  }
};
