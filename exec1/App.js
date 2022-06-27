import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,} from 'react-native';
import { useState } from 'react';
import { Contador } from './src/Contador/Contador';
import { styles } from './styles'
import { Desafio } from './src/Desafio/Desafio';
import { Flex1 } from './src/Flex1/flex.js';
import { Flex2 } from './src/Flex2/flex.js';
import { Flex3 } from './src/Flex3/flex.js';
import { Flex4 } from './src/Flex4/flex';
import { Flex5 } from './src/Flex5/flex';
import { Flex6 } from './src/Flex6/flex';
export default function App() {

  return (

    <View style={{flex:1}}>
      {/* <Contador />
      <Desafio /> */}
      {/* <Flex1/> */}
      {/* {/* <Flex2/> */}
      {/* <Flex3/> */}
      {/* <Flex4/> */}
      {/* <Flex5/> */}
      {/* <Flex6/> */}
   
      <StatusBar style="auto" />
    </View>
  );
}