
import InstallPrompt from '@/components/push-notification/InstallPrompt'
import PushNotificationManager from '@/components/push-notification/PushNotificationManager'
import React from 'react'

const PushNotifTest = () => {
  return (
    <div>
      <PushNotificationManager />
      <InstallPrompt />
    </div>
  )
}

export default PushNotifTest