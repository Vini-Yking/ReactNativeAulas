import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Flex4 = () => {

    return (
        <View style={{ flex: 1,paddingVertical:300,paddingHorizontal:30, flexDirection: "row" }}>
                <View style={{ flex: 3, backgroundColor: 'red' }} />
                <View style={{ flex: 3, backgroundColor: 'green' }} />
                <View style={{ flex: 3, backgroundColor: 'blue' }} />

        </View>
    )
}