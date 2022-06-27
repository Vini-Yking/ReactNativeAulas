import React from "react";
import { View, StyleSheet,Text } from "react-native";

export const Flex3 = () => {

    return (
        <View style={{ flex: 1,
        alignItems:"center",
        justifyContent:"space-between"}}>

            <View style={{ width:80,height:80,backgroundColor: 'blue' }} />
            <View style={{ width:80,height:80,backgroundColor: 'blue' }} />
            <View style={{ width:80,height:80,backgroundColor: 'blue' }} />
        </View>
    )
}