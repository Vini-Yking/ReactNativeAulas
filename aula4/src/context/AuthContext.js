import React, { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'
import login from '../services/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const signIn = async () => {
        const { user, token } = await login();

        if (user && token) {
            setUser(user);
            // PARA  O JWT
            api.defaults.headers["Authorization"] = `Bearer ${token}`;
            await AsyncStorage.setItem('@PokerPace:user', JSON.stringify(user))
            await AsyncStorage.setItem("@PokerPace:token", token)
        }
    }
    return (
        <AuthContext.Provider value={{ user, signIn, loading, setLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider // diminui uma importação no código

export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}