import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { styles } from "../../styles/styles";

export const DCima = ()=>{
    return(
        <View style={[{padding:30,alignContent:'center',alignItems:"center"}]}>
            <View style={styles.quadrado}/>
            <View style={styles.retanguloQuadrado}/>   
        </View>
    )
}