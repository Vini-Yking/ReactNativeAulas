import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { styles } from "../../styles";
import { useState } from 'react';

export const Contador = () => {
    const [contador, setContador] = useState(10)
    const handleReset = () => {
        setContador(10)
    }
    const handlePress = () => {
        setContador(contador - 1)
    }
    return (

        <View style={styles.container}>
            <Text style={{ fontSize: 50 }}> {contador >= 0 ? "Contador " + contador : "Sou um ser positivo não posso ser -1"} </Text>

            <TouchableOpacity style={styles.teste} onPress={handlePress}>
                <Text style={styles.textoButon}>Conte - 1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.teste, { backgroundColor: 'red' }]} onPress={handleReset} >
                <Text style={styles.textoButon}>Redefina o numero</Text>
            </TouchableOpacity>

        </View>

    )
}