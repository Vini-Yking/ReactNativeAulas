import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { getCards, getDeckId } from '../services/axiosClient';

export const LoginContext = createContext({})

const LoginProvider = ({ children }) => {
    const { signIn, user } = useContext(AuthContext)
    const [text, setText] = useState("")
    const [pass, setPass] = useState("")
    const [deckId, setDeckId] = useState([])

    const reiniciarPartida = async () => {
        const get = async () => {//como contornar um async dentro de um useEffect
            const id = await getDeckId();
            setDeckId(id)
        }
        get()
    }

    const loGinuno = (info, password) => {
        signIn()
        setText(info)
        setPass(password)
        console.log(info);
    }
    return (
        <LoginContext.Provider value={{ text, setText, pass, setPass, loGinuno, deckId, setDeckId, reiniciarPartida }}>
            {children}
        </LoginContext.Provider>
    )
}
export default LoginProvider