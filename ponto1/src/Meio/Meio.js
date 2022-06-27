import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { styles } from "../../styles/styles";
export const Meio=()=>{

    return(
        <View style={{flexDirection:"row"}}>
            <View style={[styles.retanguloRetangulo1,{flex:5}]}/>
            <View style={[styles.retanguloRetangulo2,{flex:5}]}/>
        </View>
    )
}