import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {Button, Input, Text} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import styles from '../style/estilo'

var email, password;

export default function Login({navigation}) {
    
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Principal"}]
        })
    }

    const cadastrar = () => {
      navigation.reset({
          index: 0,
          routes: [{name: "Cadastro"}]
      })
    }
  
    return (
    <View style={styles.container}>
      <Text h1>ENTRE COM O LOGIN!!!</Text>
      <Input 
      placeholder="Email"
      leftIcon={{type:'font-awesome', name:'envelope'}}
      onChangeText={value=> setEmail(value)}
      KeyboardType="email-address"/>

      <Input 
      placeholder="Senha"
      leftIcon={{type:'font-awesome', name:'lock'}}
      onChangeText={value=> setPassword(value)}
      secureTextEntry="true"/>  

      <Button
       icon={
        <Icon
        name="check"
        size={15}
        color="white"
      />
      }
      
      title="Entrar"
      onPress={()=>entrar()}
       />

      <Button
        icon={
          <Icon
          name="check"
          size={15}
          color="white"
          />
        }
        title="Cadastrar"
        onPress={()=>cadastrar()}
       />

    </View>
  );
}

