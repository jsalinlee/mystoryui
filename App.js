import { StatusBar } from 'expo-status-bar';
import { useFonts, Lemon_400Regular } from '@expo-google-fonts/lemon';

import RootNavigation from './components/RootNavigation';

export default function App() {
    let [fontsLoaded, fontError] = useFonts({ Lemon_400Regular });
    if (!fontsLoaded && !fontError) {
        return null;
    }
    return <RootNavigation />;
}
