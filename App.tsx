import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import {Onboarding, Welcome} from "./src/Authentication";
import {ThemeProvider} from "@shopify/restyle";
import {theme} from "./src/components";

const AuthenticationStack = createStackNavigator();
const AuthenticationNavigator = () => {
    return (<AuthenticationStack.Navigator headerMode={"none"}>
        <AuthenticationStack.Screen name="Onboarding" component={Onboarding}/>
        <AuthenticationStack.Screen name="Welcome" component={Welcome}/>
    </AuthenticationStack.Navigator>)

}

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <AuthenticationNavigator/>
            </NavigationContainer>
        </ThemeProvider>
    );
}

export default App;
