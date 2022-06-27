import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Flex6 = () => {

    return (
        <View style={{ flex: 1, padding:20 }}>
            <View style={{flex: 2, justifyContent: "space-evenly", flexDirection: "row", alignItems: "center"}}>
                <View style={{ height: 80, width: 80, backgroundColor: 'red' }} />
                <View style={{ height: 80, width: 80, backgroundColor: 'red' }} />
                <View style={{ height: 80, width: 80, backgroundColor: 'red' }} />
                <View style={{ height: 80, width: 80, backgroundColor: 'red' }} />
            </View>
            <View style={{flex: 2, justifyContent: "space-around", flexDirection: "row", alignItems: "center"}}>
                <View style={{ height: 80, width: 80, backgroundColor: 'green' }} />
                <View style={{ height: 80, width: 80, backgroundColor: 'green' }} />
                <View style={{ height: 80, width: 80, backgroundColor: 'green' }} />
                <View style={{ height: 80, width: 80, backgroundColor: 'green' }} />
            </View>
            <View style={{flex: 2, justifyContent: "space-around", flexDirection: "row", alignItems: "center" }}>
                <View style={{ height: 80, width: 80, backgroundColor: 'blue' }} />
                <View style={{ height: 80, width: 80, backgroundColor: 'blue' }} />
                <View style={{ height: 80, width: 80, backgroundColor: 'blue' }} />
                <View style={{ height: 80, width: 80, backgroundColor: 'blue' }} />
            </View>
            <View style={{flex: 2, justifyContent: "space-around", flexDirection: "row", alignItems: "center" }}>
                <View style={{ height: 80, width: 80, backgroundColor: 'purple' }} />
                <View style={{ height: 80, width: 80, backgroundColor: 'purple' }} />
                <View style={{ height: 80, width: 80, backgroundColor: 'purple' }} />
                <View style={{ height: 80, width: 80, backgroundColor: 'purple' }} />
            </View>
        </View>
    )
}