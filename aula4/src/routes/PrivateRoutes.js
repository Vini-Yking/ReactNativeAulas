import React from 'react'
import Home from "../screens/Home"
import Game from "../screens/Game"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const PrivateRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="Game"
                component={Game}

                options={{ title: "BlackJack 21 bom jogo!", headerTransparent: true, headerTintColor: 'white' }} />
        </Stack.Navigator>
    )
}
export default PrivateRoutes