import React from "react";
import { View, StyleSheet,Text } from "react-native";

export const Flex2 = () => {

    return (
        <View style={{ flex: 1,flexDirection:"column"}}>

            <View style={{ flex: 3}} />
            <View style={{ flex: 1, backgroundColor: 'blue' }} />
            <View style={{ flex: 3}} />

        </View>
    )
}