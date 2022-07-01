import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

const quadrados = []
let linhas = []
let cor = ['red', 'blue', 'green', 'purple']

// cor.map((a) => {
//     return (
//         <View key={a.length-1} style={{ flex: 2, justifyContent: "space-around", flexDirection: "row", alignItems: "center" }}>
//             cor.map{(b)=>{
//                 return(
//                     <View key={b.key} style={{ marginHorizontal: 3, height: 80, width: 80, backgroundColor: cor[b.length-1] }} />
//                 )
//             }

//             }
//         </View>
//     )
// })
for (let i = 0; i < 4; i++) {
    quadrados.push(
        <View key={i} style={{ marginHorizontal: 3, height: 80, width: 80, backgroundColor: cor[i] }} />
    )
}
for (let j = 0; j < 4; j++) {
    linhas.push(
        <View key={j} style={{ flex: 2, justifyContent: "space-around", flexDirection: "row", alignItems: "center" }}>
            {quadrados}
        </View>
    )
}


export const Flex6 = () => {

    return (
        <View style={{ flex: 1, padding: 20 }}>
            {linhas}

        </View>
    )
}