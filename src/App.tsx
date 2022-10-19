import React, { Fragment } from 'react'
import { StatusBar } from 'react-native'
import { Home } from './screens/home/home'

export const App:React.FC = () => {
  return (
    <Fragment>
      <StatusBar barStyle='light-content'/>
      <Home />
    </Fragment>
  )
}