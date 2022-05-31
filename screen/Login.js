import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {Button, Input, Text} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5'
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
      <Text h1 style={styles.texto}>Login</Text>
      
      <Input 
      inputContainerStyle={{
        borderColor: "#9400BD"}}
      placeholderTextColor="#9400BD" 
      inputStyle={styles.input}
      placeholder="Email"
      leftIcon={{type:'font-awesome', name:'envelope', size:15, color:'#9400BD'}}
      onChangeText={value=> setEmail(value)}
      KeyboardType="email-address"/>

      <Input 
      inputContainerStyle={{
        borderColor: "#9400BD"}}
      placeholderTextColor="#9400BD" 
      placeholder="Senha"
      leftIcon={{type:'font-awesome', name:'lock', size:20, color:'#9400BD'}}
      onChangeText={value=> setPassword(value)}
      secureTextEntry="true"/>  

      <View style={styles.container__botao}>

        <Button
          type="outline"
          titleStyle={styles.botao}
          buttonStyle={styles.botao}
          containerStyle={{width:'49%'}}
          icon={
          <Icon
            name="door-open"
            size={15}
            color="#9400BD"/>
          } 
          title="Entrar"
          onPress={()=>entrar()}/>

        <Button
          type="outline"
          titleStyle={styles.botao}
          buttonStyle={styles.botao}
          containerStyle={{width:'49%'}}
          icon={
            <Icon
            name="address-card"
            size={15}
            color="#9400BD"/>
          }
          title="Cadastrar"
          onPress={()=>cadastrar()}
        />

      </View>

    </View>
  );
}

