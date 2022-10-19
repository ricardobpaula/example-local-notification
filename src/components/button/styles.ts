import {
    TouchableOpacity,
    Text
} from 'react-native'

import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity)`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    padding: 0px 20px;
    background-color: #6C6CFF;
    align-items: center;
    justify-content: center;
`

export const Title = styled(Text)`
    font-size: 16px;
    text-align: center;
    color: #C4C4CC;
`