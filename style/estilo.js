import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#18191a',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto: {
      color: '#9400BD'
    },
    input:{
      color: '#9400BD'
    },
    container__botao:{
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: '10px'
    },
    botao:{
      width: '100%',
      borderColor: '#9400BD',
      color: '#9400BD'
    },
    paragraph: {
      margin: 24,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },
    card: {
      backgroundColor: '#494C4F'
    }
});

export default styles