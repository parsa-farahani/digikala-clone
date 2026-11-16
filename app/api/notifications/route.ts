// app/api/notifications/route.ts
import { NextResponse } from 'next/server'
import webpush from 'web-push'

// Ensure these env vars are set:
// NEXT_PUBLIC_VAPID_PUBLIC_KEY  (public, used on client)
// VAPID_PRIVATE_KEY            (private, only on server)
// MAILTO                      (optional, e.g. 'mailto:you@example.com')

webpush.setVapidDetails(
  process.env.MAILTO ?? 'mailto:you@example.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!
)

// Simple in-memory storage for dev. Replace with DB for production.
let subscriptions: PushSubscription[] = []

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { action, sub, message } = body

    if (action === 'subscribe') {
      if (sub && sub.endpoint) {
        // avoid duplicates
        const exists = subscriptions.some((s) => s.endpoint === sub.endpoint)
        if (!exists) subscriptions.push(sub)
      }
      return NextResponse.json({ success: true })
    }

    if (action === 'unsubscribe') {
      if (sub && sub.endpoint) {
        subscriptions = subscriptions.filter((s) => s.endpoint !== sub.endpoint)
      }
      return NextResponse.json({ success: true })
    }

    if (action === 'send') {
      if (!message) {
        return NextResponse.json({ success: false, error: 'No message' }, { status: 400 })
      }

      // send to all stored subscriptions (for dev). You can target a single sub too.
      const results = await Promise.allSettled(
        subscriptions.map((subscription) =>
          webpush.sendNotification(subscription as any, JSON.stringify({
            title: 'Digikala Notification',
            body: message,
            icon: '/logo-192.png',
          }))
        )
      )

      // Optionally filter out expired/unsubscribed endpoints (status 410)
      subscriptions = subscriptions.filter((_, i) => {
        const r = results[i]
        if (r.status === 'rejected') {
          // web-push rejected — you can check r.reason.statusCode === 410 and remove.
          // For now, remove those that failed with 410 if available.
          const err: any = r.reason
          if (err && (err.statusCode === 410 || err.statusCode === 404)) {
            return false // drop it
          }
        }
        return true
      })

      return NextResponse.json({ success: true })
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (err) {
    console.error('API /api/notifications error:', err)
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}
