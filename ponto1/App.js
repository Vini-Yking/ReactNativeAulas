import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { Conteudo } from './src/Content/Conteudo';
import { DCima } from './src/DepoisCima/DCima';
import { Footer } from './src/Footer/Footer';
import { Meio } from './src/Meio/Meio';
import { Cima } from './src/ParteCima/Cima';
import { Separador } from './src/Separador/Separador';
import {styles} from './styles/styles'

export default function App() {
  return (
    <View style={styles.container}>
      <Cima/>
      <DCima/>
      <Meio/>
      <Separador/>
      <Conteudo/>
      <Footer/>
      <StatusBar style="auto" />
    </View>
  );
}

