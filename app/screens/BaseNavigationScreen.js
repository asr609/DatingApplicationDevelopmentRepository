import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import WelcomeScreen from "./WelcomeScreen";
import SignInScreen from "./SignInScreen";
import LoginScreen from "./LoginScreen";

const Stack = createNativeStackNavigator();

export default function BaseNavigationScreen(){
    return(
        <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
            headerShown : true
        }}
        initialRouteName = "WelcomeScreen">
            <Stack.Screen name= "WelcomeScreen" component= {WelcomeScreen}/>
            <Stack.Screen name= "SignInScreen" component= {SignInScreen}/>
            <Stack.Screen name= "LoginScreen" component= {LoginScreen}/>
        </Stack.Navigator>

        </NavigationContainer>
    )
        
    
}