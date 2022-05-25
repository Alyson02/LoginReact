import React,{ useState} from 'react';
import {StyleSheet,View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import styles from '../style/estilo';

export default function Cadastro({navigation}){

    const [email, setEmail] = useState(null);
    const [nome, setNome] = useState(null);
    const [cpf, setCpf] = useState(null);

    return(
        <View style={[styles.container, specificStyle.specificContainer]}>
         <Text h3>CADASTRO </Text>
        <Input
          placeholder="E-mail"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={value => setEmail(value)}
          keyboardType="email-address"
          />
        <Input
          placeholder="NOME"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={value => setNome(value)}
          secureTextEntry={true}
          />

            <Input
          placeholder="CF"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={value => setCpf(value)}
          secureTextEntry={true}
          />
  
        
            <Button
                icon={
                    <Icon
                    name="check"
                    size={15}
                    color="white"
                    />
                }
                title="Salvar"
                buttonStyle={specificStyle.button}
                onPress={()=> salvar()}
                />


        </View>
    );
}

const specificStyle =StyleSheet.create({
    specificContainer:{
        backgroundColor:"#ffff00",
        padding:10
    },
    button:{
        width: "100%",
        margintop:10
    }
})