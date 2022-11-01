import React from 'react'
import { Alert } from 'react-native'

import { Button } from '../../components/button/button'

import { schedulePushNotification } from '../../utils/notification' 
import {
    Container,
    Content
} from './styles'

export const Home:React.FC = () => {
    
    const handleNotify = async () => {
        await schedulePushNotification({
            title: 'Notificação teste',
            body: 'Corpo da notificação',
            date: new Date(new Date().setSeconds(new Date().getSeconds() + 30))
        })
        Alert.alert('Notificação agendada')
    }
    
    return (
        <Container>
            <Content>
                <Button title='Notificar' onPress={handleNotify}/>
            </Content>
        </Container>
    )
}