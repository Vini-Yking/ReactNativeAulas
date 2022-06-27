import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Flex5 = () => {

    return (
        <View style={{ flex: 1,justifyContent:"flex-end",flexDirection:"column",alignItems:"flex-end" }}>
                <View style={{height:70,width:70, backgroundColor: 'red' }} />
                <View style={{height:70,width:70, backgroundColor: 'green' }} />
                <View style={{height:70,width:70, backgroundColor: 'blue' }} />

        </View>
    )
}