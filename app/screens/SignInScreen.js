import React from 'react';
import { View,Text ,StyleSheet} from 'react-native';

function SignInScreen(props) {
    return (
       <View style= {styles.background}>
        <Text>This is Sign In Screen</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1
        
    }
})

export default SignInScreen;