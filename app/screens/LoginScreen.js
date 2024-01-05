import React from 'react';
import { View ,Text,StyleSheet} from 'react-native';

function LoginScreen(props) {
    return (
        <View style= {styles.background}>
              
        <Text> This Is Login Screen</Text>
        </View>
        
      
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1
        
    }
})


export default LoginScreen;