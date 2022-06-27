import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { styles } from "../../styles";
import { useState } from 'react';

export const Desafio = () => {
    const [text, setText] = useState("")
    const [text1, setText1] = useState(0)
    const [continua, setContinua] = useState(false)

    const handlePressInput = () => {
        if (text === 1) {
            setText(0)
            setContinua(true)
        } else {
            setText(text - 1)
        }

    }

    const handleResetInput = () => {
        setText(text1)
        setContinua(false)
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 50 }}> {text > 0 ? "Desafio Contador : " + text : "Sou um ser positivo não posso ser -1"}  </Text>
            <TextInput style={styles.inputChallenge} value={text} onChange={(e) => ([setText(e.target.value), setText1(e.target.value)])} placeholder="Coloque o valor "></TextInput>

            <TouchableOpacity disabled={continua} style={styles.teste} onPress={handlePressInput}>
                <Text style={styles.textoButon}>Conte - 1</Text>
            </TouchableOpacity>


            <TouchableOpacity style={[styles.teste, { backgroundColor: 'red' }]} onPress={handleResetInput} >
                <Text style={styles.textoButon}>Redefina para numero inicial </Text>
            </TouchableOpacity>
        </View>)

}