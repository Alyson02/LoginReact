import { StyleSheet, View } from 'react-native';
import {Button, Input, Text} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

var email, password;

export default function App() {
  return (
    <View style={styles.container}>
      <Text h1>ENTRE COM O LOGIN!!!</Text>
      <Input 
      placeholder="Email"
      leftIcon={{type:'font-awesome', name:'envelope'}}
      onChangeText={value=>email = value}
      KeyboardType="email-address"/>

      <Input 
      placeholder="Senha"
      leftIcon={{type:'font-awesome', name:'lock'}}
      onChangeText={value=>password = value}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
