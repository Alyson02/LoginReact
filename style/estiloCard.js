import { StyleSheet } from "react-native-web";

const styleCard = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1C1D1F'
    },
    fonts: {
      marginBottom: 8,
    },
    user: {
      flexDirection: 'row',
      marginBottom: 6,
      alignItems: 'center'
    },
    image: {
      width: 80,
      borderRadius: '100%',
      height: 80,
      marginRight: 10,
    },
    name: {
      fontSize: 16,
      color: '#fefe'
    },
    botao: {
      width: '100%',
      borderColor: '#9400BD',
      color: '#9400BD',
      borderRadius: 0,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
    }
  });

export default styleCard;