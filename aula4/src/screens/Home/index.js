import { Text, View, ActivityIndicator, Button, ImageBackground } from 'react-native';
import React, { useEffect, useState, useContext } from 'react'
import { getDeckId } from '../../services/axiosClient';
import img from './../../imgs/download.webp'
import { styles } from './styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginContext } from '../../context/LoginContext'

const Home = ({ navigation }) => {
    const [loading, setLoading] = useState(false)
    const [idDeck, setIdDeck] = useState([])
    const { deckId, setDeckId, reiniciarPartida } = useContext(LoginContext)

    const getStorage = async () => {
        const userBd = await AsyncStorage.getItem('@PokerPace:user')
        const tokenBd = await AsyncStorage.getItem('@PokerPace:token')
        console.log(`user ${userBd} token ${tokenBd}`);
    }

    useEffect(() => {
        getStorage()
        const get = async () => {//como contornar um async dentro de um useEffect
            setLoading(true)
            const id = await getDeckId();
            setIdDeck(id)
            setDeckId(id)
            setLoading(false)
        };
        get();
    }, [])

    const iniciarPartida = async () => {
        navigation.navigate("Game",
            {
                deckId: idDeck //passar informação entre screen e outra
            }
        )
    }

    return (

        <ImageBackground source={img} style={{ flex: 1 }} imageStyle={{ resizeMode: 'cover' }}>
            <View style={{ flexDirection: "row" }}>
                {loading && <ActivityIndicator size="small" />}
            </View >
            <Text style={styles.title} >BlackJack 21 </Text>
            <View style={{ justifyContent: 'center', padding: 50 }}>
                <Button title="iniciar partida" style={styles.buton} onPress={iniciarPartida} />
            </View>
        </ImageBackground>


    );
}

export default Home
