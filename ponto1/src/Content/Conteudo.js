import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { styles } from "../../styles/styles";


export const Conteudo = () => {

    useEffect(()=>{
        criarQuadrados
   
   },[])
    const linhas = []
    const quadrados = []



    const criarQuadrados = () => {
        for (let i = 0; i < 3; i++) {
            quadrados.push(
                <View key={i} style={[styles.quadrado, { marginHorizontal: 3 }]} />
            )
        }
        return quadrados
    }
    for (let j = 0; j < 2; j++) {
        linhas.push(<View style={{padding:30,flexDirection: "row", justifyContent: "space-around" }}>
            
            {quadrados}
        </View>
        )
    }
    
    for (let i = 0; i < 3; i++) {
        quadrados.push(
            <View key={i} style={[styles.quadrado,{marginHorizontal:3}]} />
        )
    }
    return (
        <View>
           {linhas}
        </View>

    )
}