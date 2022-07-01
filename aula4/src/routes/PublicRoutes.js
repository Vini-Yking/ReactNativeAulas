import React from 'react'
import { Login } from "../screens/Login"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const PublicRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
export default PublicRoutes
