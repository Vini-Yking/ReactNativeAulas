import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Flex1 = () => {

    return (
        <View style={{ flex: 1, flexDirection: "row" }}>

            <View style={{ flex: 3 }} />
            <View style={{ flex: 2, backgroundColor: 'blue' }} />
            <View style={{ flex: 3 }} />

        </View>
    )
}