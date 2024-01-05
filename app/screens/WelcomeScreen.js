import React from 'react';
import { Image, ImageBackground,StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        
        <ImageBackground style= {styles.background}>
        <View style = {styles.logoContainer}>
        <Image style = {styles.logo}source={require("../assets/logoremovebg.png")}/>
        <Text>Here is a Text</Text>
        </View>
        <View style={styles.loginButton}>
            <Text style={styles.Text}>Login</Text>
        </View>
        <View style={styles.registerButton}>
            <Text style={styles.Text}>Sign Up</Text>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent: "flex-end",
        
    },
    loginButton:{
        width :'100%',
        height : 70,
        backgroundColor : "#fc5c65"
    },
    registerButton:{
        width: '100%',
        height : 70,
        backgroundColor: "#4ecdc4",
    },
    logo : {
        width:100,
        height:100,
    },
    logoContainer:{
        position: "absolute",
        top:30,
        alignContent:"center",
    },
    Text:{
        fontSize: 30,
        alignContent : 'center'

    }
})

export default WelcomeScreen;