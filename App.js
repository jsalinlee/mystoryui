import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import DailySummaryScreen from './screens/DailySummaryScreen';
import TimelineScreen from './screens/TimelineScreen';

export default function App() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name='Timeline'
                    component={TimelineScreen}
                    options={{
                        tabBarIcon: () => <Ionicons name='calendar-outline' />,
                    }}
                />
                <Tab.Screen
                    name='DailySummary'
                    component={DailySummaryScreen}
                    options={{
                        tabBarIcon: () => <Ionicons name='star' />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
