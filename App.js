import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Lemon_400Regular } from '@expo-google-fonts/lemon';

import NavigationBar from './components/NavigationBar';

export default function App() {
    let [fontsLoaded, fontError] = useFonts({ Lemon_400Regular });
    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <NavigationContainer>
            <NavigationBar />
        </NavigationContainer>
    );
}
