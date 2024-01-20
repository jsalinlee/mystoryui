import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Lemon_400Regular } from '@expo-google-fonts/lemon';

import NavigationBar from './components/NavigationBar';
import LoginScreen from './screens/Auth/LoginScreen';
import { useState } from 'react';

export default function App() {
    let [fontsLoaded, fontError] = useFonts({ Lemon_400Regular });
    let [loggedIn, setLoggedIn] = useState(false);
    if (!fontsLoaded && !fontError) {
        return null;
    }
    return loggedIn ? (
        <NavigationContainer>
            <NavigationBar />
        </NavigationContainer>
    ) : (
        <LoginScreen />
    );
}
