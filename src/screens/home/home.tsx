import React from 'react'
import { Alert } from 'react-native'
import { Button } from '../../components/button/button'

import {
    Container,
    Content
} from './styles'

export const Home:React.FC = () => {
    
    const handleNotify = () => {
        Alert.alert('Notificado')
    }
    
    return (
        <Container>
            <Content>
                <Button title='Notificar' onPress={handleNotify}/>
            </Content>
        </Container>
    )
}