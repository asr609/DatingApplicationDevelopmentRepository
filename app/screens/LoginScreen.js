import React, { useState } from 'react';
import {SafeAreaView,ScrollView,StatusBar,
    StyleSheet,Text,useColorScheme,
    View,TextInput,TouchableOpacity,} from 'react-native';
import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} 
    from 'react-native/Libraries/NewAppScreen';

function LoginScreen(props) {
const onPressLogin = () => {
    // Do something about login operation
};
    
const onPressForgotPassword = () => {
    // Do something about forgot password operation
    alert("You clicked Forgot password");
};
const onPressSignUp = () => {
    // Do something about signup operation
};

const [state,setState] = useState({
    email: '',
    password: '',
});

    return (
      
        <View style= {styles.container}>
        <View style={styles.inputView}>

        <TextInput style={styles.inputText} placeholder="User Name" placeholderTextColor="#003f5c"
        onChangeText={
            text => setState({email:text})
            }/>
        </View>

        <View style={styles.inputView}>

        <TextInput style={styles.inputText} secureText Entry placeholder="Password" 
        placeholderTextColor="#003f5c" onChangeText={
            text => setState({password:text})
            }/>

        {/* <TouchableOpacity
        onPress = 
        {onPressForgotPassword}> */}
            <Text style={styles.forgot}>Forgot Password?</Text>
            {/* </TouchableOpacity> */}
            {/* <TouchableOpacity 
            onPress = {onPressLogin}style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress = {onPressSignUp}>
            <Text style={styles.inputText}>Signup</Text>
        </TouchableOpacity>*/}
        
        </View>  
        </View>
        
      
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#800000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontWeight: "bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom: 40,},

    inputView:{
        width:"80%",
        backgroundColor:"white",
        borderRadius:25,
        height:50,
        marginBottom:30,
        justifyContent:"center",
        padding:20
    },
    
    inputText:{
        height:100,
        color:"black"
        
    },

    forgotAndSignUpText:{
        color:"white",
        fontSize:15,
        marginTop : 100,
        position:'absolute'
    },

    loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:200,
        marginBottom:10
    },
})


export default LoginScreen;