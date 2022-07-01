import { View, Text, Button, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext.js'
import { styles } from '../Home/styles.js'
import { LoginContext } from '../../context/LoginContext.js'

export const Login = () => {
  const { signIn, user } = useContext(AuthContext)
  const { loGinuno } = useContext(LoginContext)
  const [info, setInfo] = useState("")
  const [password, setPassword] = useState("")
  // console.log(text, pass);

  const handleLogon = () => {
    console.log(user);
    // if ((text === user.name)&&(pass === user.password)){
    //   console.log("Loguei");
    // } else{
    //   console.log(`${user.name} ${user.password} ${text} ${pass}`);
    //   console.log("Não consegui logar");
    // }

  }
  return (
    <View>
      <Text >Login</Text>
      <TextInput value={info} style={styles.inputLogin} placeholder="Usuario" onChangeText={setInfo} />
      <TextInput value={password} style={styles.inputLogin} secureTextEntry={true} placeholder="senha" onChangeText={setPassword} />
      <Button title='Entrar' onPress={() => (loGinuno(info, password))} />
    </View>
  )
}