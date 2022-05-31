import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Image}  from 'react-native';
import {Button, Input, Card} from 'react-native-elements'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from '../style/estilo'
import styleCard from "../style/estiloCard";

function Feed(){
    
    return(
    <ScrollView style={{backgroundColor: '#18191a'}}>
      <View style={styleCard.container}>
        <Text style={{ marginBottom: 10, color: '#fefe', fontSize:20, marginLeft: 13,  }}>
          Produtos Destaques
        </Text>
        <Card containerStyle={{backgroundColor:'#18191a', borderColor:'#9400BD'}}>
          <Card.Title style={{color: '#fefe', fontSize:24}}>Elden Ring</Card.Title>
          <Card.Divider style={{backgroundColor:'#9400BD'}}/>
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://cdn.pichau.com.br/wysiwyg/Descricao/Asus/TUF-GAMING-B550-PLUS/TUF-GAMING-B550-PLUS3.png',
            }}
          />
          <Text style={{ marginBottom: 10, color: '#fefe', fontSize:20 }}>
            Placa mãe ASUS TUF b550
          </Text>
          <Button
            icon={
              <Icon
                name="eye"
                size= {20}
                color="#9400BD"
                iconStyle={{ marginRight: 10 }}
              />
            }
            type="outline"
            titleStyle={styles.botao}
            buttonStyle={styleCard.botao}
            title="R$ 750"
          />
        </Card>
        <Card containerStyle={{backgroundColor:'#18191a', borderColor:'#9400BD'}}>
          <Card.Title style={{color: '#fefe', fontSize: 24}}>Elden Ring</Card.Title>
          <Card.Divider style={{backgroundColor:'#9400BD'}}/>
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://www.navegamer.com.br/image/cache/catalog/--250222-vitrine-s-bg/Urano%20AA01_G1903-300x300.png',
            }}
          />
          <Text style={{ marginBottom: 10, color: '#fefe', fontSize:20 }}>
            Computadore Gamer FireOrange Ryzen 7 5700x GTX 2060 32GB 3200MHZ SSD 1TB
          </Text>
          <Button
            icon={
              <Icon
                name="eye"
                size= {20}
                color="#9400BD"
                iconStyle={{ marginRight: 10 }}
              />
            }
            type="outline"
            titleStyle={styles.botao}
            buttonStyle={styleCard.botao}
            title="R$ 6000"
          />
        </Card>
        z<Card containerStyle={{backgroundColor:'#18191a', borderColor:'#9400BD'}}>
          <Card.Title style={{color: '#fefe', fontSize: 24}}>Elden Ring</Card.Title>
          <Card.Divider style={{backgroundColor:'#9400BD'}}/>
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://livrariascuritiba.vteximg.com.br/arquivos/ids/1898947/in027108_1.jpg?v=637160298364370000',
            }}
          />
          <Text style={{ marginBottom: 10, color: '#fefe', fontSize:20 }}>
            Teclado Gamer Logitech G213
          </Text>
          <Button
            icon={
              <Icon
                name="eye"
                size= {20}
                color="#9400BD"
                iconStyle={{ marginRight: 10 }}
              />
            }
            type="outline"
            titleStyle={styles.botao}
            buttonStyle={styleCard.botao}
            title="R$ 250"
          />
        </Card>
      </View>
    </ScrollView>
    );
}

function Profile(){
    const users = [
    {
        name: 'Hardware',
        avatar:
        'https://www.notebookcheck.info/fileadmin/Notebooks/NVIDIA/Turing/nvidia_TU117_chip.jpg',
    },
    {
        name: 'Perféricos',
        avatar: 'https://tm.ibxk.com.br/2021/06/03/03094039542059.jpg?ims=704x264',
    },
    {
        name: 'Computadores',
        avatar:
        'https://rocketz.com.br/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWms9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--75bbc3763ae3d50875cc3bc1045623e3085fa253/pc-gamer-atlas-top.jpg',
    },
    ];

    return(
        <ScrollView style={{backgroundColor: '#18191a'}}>
            <View style={styleCard.container}>
            <Card containerStyle={{backgroundColor:'#18191a', borderColor:'#9400BD'}}>
                <Card.Title style={{color: '#fefe', fontSize: 24}}>Departamentos</Card.Title>
                <Card.Divider style={{backgroundColor:'#9400BD'}} />
                {users.map((u, i) => {
                return (
                    <View key={i} style={styleCard.user}>
                    <Image
                        style={styleCard.image}
                        resizeMode="cover"
                        source={{ uri: u.avatar }}
                    />
                    <Text style={styleCard.name}>{u.name}</Text>
                    </View>
                );
                })}
            </Card>
            </View>
        </ScrollView>
    )
}

function Notifications(){
    return(
        <View style={styles.container}>
            <Text>Notifications!</Text>
        </View>
    )
}

const Tab = createBottomTabNavigator();

export default function Principal(){
    return (
        <Tab.Navigator 
            initialRouteName='Feed'
            tabBarOptions={{
                activeTintColor: '#9400BD',
            }}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: '#18191a',
                    borderTopColor: '#9400BD'
                }
            }}
        >
            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    tabBarLabel: 'Cadastrar',
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons name="plus-circle-outline" color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons name="account" color={color} size={size}/>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
