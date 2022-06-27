import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { styles } from "../../styles/styles";

export const Conteudo = () => {
    const linhas = []
    const quadrados = []

    for (let i = 0; i < 3; i++) {
        quadrados.push(
            <View key={i} style={[styles.quadrado,{marginHorizontal:3}]} />
        )
    }
    return (
        <View>
            <View style={{ padding: 20, flexDirection: "row", justifyContent: "space-around" }}>
                {quadrados}
            </View>
            <View style={{ padding: 20, flexDirection: "row", justifyContent: "space-around" }}>
                {quadrados}
            </View>
        </View>

    )
}