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
        <Card containerStyle={{backgroundColor:'#18191a', borderColor:'#9400BD'}}>
          <Card.Title style={{color: '#fefe', fontSize:24}}>Elden Ring</Card.Title>
          <Card.Divider style={{backgroundColor:'#9400BD'}}/>
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://tm.ibxk.com.br/2021/11/09/09191733039114.jpg?ims=1200x675',
            }}
          />
          <Text style={{ marginBottom: 10, color: '#fefe', fontSize:20 }}>
            Quais as chances do revolucionario jogo da from vencer o GOTY?
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
            title="Ler artigo"
          />
        </Card>
        <Card containerStyle={{backgroundColor:'#18191a', borderColor:'#9400BD'}}>
          <Card.Title style={{color: '#fefe', fontSize: 24}}>Elden Ring</Card.Title>
          <Card.Divider style={{backgroundColor:'#9400BD'}}/>
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://assets.reedpopcdn.com/respawn-a-trabalhar-ja-num-novo-jogo-de-star-wars-1576668174267.jpg/BROK/thumbnail/1600x900/quality/100/respawn-a-trabalhar-ja-num-novo-jogo-de-star-wars-1576668174267.jpg',
            }}
          />
          <Text style={{ marginBottom: 10, color: '#fefe', fontSize:20 }}>
            EA voltando a produzir ótimos jogos? Veja tudo sobre o novo Star Wars Respown
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
            title="Ler artigo"
          />
        </Card>
        <Card containerStyle={{backgroundColor:'#18191a', borderColor:'#9400BD'}}>
          <Card.Title style={{color: '#fefe', fontSize: 24}}>Elden Ring</Card.Title>
          <Card.Divider style={{backgroundColor:'#9400BD'}}/>
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://valedopontar.com.br/wp-content/uploads/2021/11/cyberpunk-2077-e-gdr-profondo-the-witcher-3-parola-cd-projekt-v3-462715-1280x720-1.jpg',
            }}
          />
          <Text style={{ marginBottom: 10, color: '#fefe', fontSize:20 }}>
            CD Project Red conserta Cyberpunk e promete novo The Witcher
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
            title="Ler artigo"
          />
        </Card>
      </View>
    </ScrollView>
    );
}

function Profile(){
    const users = [
    {
        name: 'Rengoku',
        avatar:
        'https://nerdhits.com.br/wp-content/uploads/2021/09/rengoku-cosplay-1200x900.jpg',
    },
    {
        name: 'Gojo',
        avatar: 'https://ovicio.com.br/wp-content/uploads/2021/03/20210305-jujutsu-kaisen-gojo-origin-1259366-730x365.jpeg',
    },
    {
        name: 'Draken',
        avatar:
        'https://1.bp.blogspot.com/-J8ijK6EEmGI/YRpzfdG11dI/AAAAAAAACXE/Cs86Yb9V-ogYnpf9CeFHWrBkDuglbw2mQCNcBGAsYHQ/s500/Draken%2BTokyo%2BRevengers.jpg',
    },
    ];

    return(
        <ScrollView style={{backgroundColor: '#18191a'}}>
            <View style={styleCard.container}>
            <Card containerStyle={{backgroundColor:'#18191a', borderColor:'#9400BD'}}>
                <Card.Title style={{color: '#fefe', fontSize: 24}}>Escritores</Card.Title>
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
