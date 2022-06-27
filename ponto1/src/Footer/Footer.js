import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { styles } from "../../styles/styles";
//teste commit
export const Footer = ()=>{
    return(
        <View style={{flex:1,alignContent:"flex-end",justifyContent:"flex-end"}}>
            <View style={[styles.retanguloInferior]}/>
        </View>
    )
}