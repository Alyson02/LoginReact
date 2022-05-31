import React,{ useState} from 'react';
import {StyleSheet,View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import styles from '../style/estilo';

export default function Cadastro({navigation}){

    const [email, setEmail] = useState(null);
    const [nome, setNome] = useState(null);
    const [cpf, setCpf] = useState(null);

    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Principal"}]
        })
    }

    return(
        <View style={[styles.container, specificStyle.specificContainer]}>
         <Text h3 style={styles.texto}>CADASTRO </Text>
        <Input
          inputContainerStyle={{borderColor: "#9400BD"}}
          placeholderTextColor="#9400BD" 
          inputStyle={styles.input}
          placeholder="E-mail"
          leftIcon={{ type: 'font-awesome', name: 'envelope', size:15, color:'#9400BD' }}
          onChangeText={value => setEmail(value)}
          keyboardType="email-address"
          />
        <Input
          inputContainerStyle={{borderColor: "#9400BD"}}
          placeholderTextColor="#9400BD" 
          inputStyle={styles.input}
          placeholder="Nome"
          leftIcon={{ type: 'font-awesome', name: 'lock', size:20, color:'#9400BD' }}
          onChangeText={value => setNome(value)}
          secureTextEntry={true}
          />

        <Input
          inputContainerStyle={{borderColor: "#9400BD"}}
          placeholderTextColor="#9400BD" 
          inputStyle={styles.input}
          placeholder="Cpf"
          leftIcon={{ type: 'font-awesome', name: 'address-card', size:20, color:'#9400BD' }}
          onChangeText={value => setCpf(value)}
          />
  
        <View style={styles.container__botao}>
            <Button
            type="outline"
            titleStyle={styles.botao}
            buttonStyle={styles.botao}
            containerStyle={{width:'100%'}}
            icon={
            <Icon
                name="door-open"
                size={15}
                color="#9400BD"/>
            } 
            title="Entrar"
            onPress={()=>entrar()}/>
        </View>


        </View>
    );
}

const specificStyle =StyleSheet.create({
    specificContainer:{
        backgroundColor:"#18191a",
        padding:10
    },
    button:{
        width: "100%",
        margintop:10
    }
})