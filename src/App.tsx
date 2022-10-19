import React, { Fragment } from 'react'
import { StatusBar } from 'react-native'

import * as Notifications from 'expo-notifications'

import { Home } from './screens/home/home'
import { Notification } from './utils/notification';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export const App:React.FC = () => {
  return (
    <Fragment>
      <StatusBar barStyle='light-content'/>
      <Notification />
      <Home />
    </Fragment>
  )
}