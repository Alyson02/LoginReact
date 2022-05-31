import React,{useState} from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from "./screen/Login";
import Principal from './screen/Principal';
import Cadastro from "./screen/Cadastro";

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login"  component={Login} />
            <Stack.Screen name="Principal" component={Principal}/> 
            <Stack.Screen name="Cadastro" component={Cadastro}/> 
        </Stack.Navigator>
    );
}

export default function App(){
    return(
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}