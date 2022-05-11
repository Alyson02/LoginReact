import React,{useState} from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from "./screen/Login";
import Principal from './screen/Principal';

const Stack = createStackNavigator();

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Principal" component={Principal}/> 
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