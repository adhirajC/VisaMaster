import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import Inputs from '../funcs/input';
import {
    Image,
    StyleSheet,
    View,
} from 'react-native';


export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Image source={(require('../assets/images/eceicon.png'))}
                   style={{ width: 100, height: 100 }}
            />
            <Image source={(require('../assets/images/ecetitle.png'))}
                   style={{ width: 217, height: 37}}
            />
            <Inputs/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
});