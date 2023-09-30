import React from "react";
import { Image, View, Text, StatusBar } from "react-native";
import logo from './../../assets/uGameFLogo.png';
import {css} from './../../../assets/css/Css';

export default function Header(){
    return (
        <View style={css.container}>
        <StatusBar style={'dark'} />
        <Image
          source={logo}
          style={css.logo}
        />
            <Text>uGameFootball</Text>
        </View>
    )
}

