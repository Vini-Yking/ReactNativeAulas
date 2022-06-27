import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import style from './styles.js'


export default function App() {
  const [contador,setContador] = useState(0)

  return (
    <View style={style.container}>
      <Text style={style.novoEstilo} >"Contador"{ contador}
      </Text>
      <Button onPress={()=>(setContador(contador+1))} title='Contador'></Button>

      <TouchableOpacity style={style.button} onPress={()=>(setContador(contador-1))} >
        <Text style={{color:"#fff"}} > Descontador</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};
