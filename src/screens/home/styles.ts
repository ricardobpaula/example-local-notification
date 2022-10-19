import {
    SafeAreaView,
    View
} from 'react-native'

import styled from 'styled-components/native'

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: #121214;
`

export const Content = styled(View)`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 20px;
`