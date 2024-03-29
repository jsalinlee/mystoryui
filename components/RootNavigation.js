import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

import HeaderBar from './HeaderBar';
import HomeScreen from '../screens/HomeScreen';
import TimelineScreen from '../screens/TimelineScreen';
import AddPostScreen from '../screens/AddPostScreen';
import SocialScreen from '../screens/SocialScreen';
import CustomizationScreen from '../screens/CustomizationScreen';
import Colors from '../constants/colors';
import LoginScreen from '../screens/Auth/LoginScreen';

function tabConfig(iconName) {
    return {
        tabBarIcon: ({ color, size }) => <Ionicons color={color} size={size} name={iconName} />,
        tabBarActiveTintColor: Colors.primary,
    };
}

function RootNavigation() {
    const Tab = createBottomTabNavigator();
    let [loggedIn, setLoggedIn] = useState(true);

    return loggedIn ? (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerTitle: HeaderBar,
                    headerStyle: { height: 120 },
                }}
                initialRouteName='TimelineScreen'
            >
                <Tab.Screen name='HomeScreen' component={HomeScreen} options={tabConfig('home')} />
                <Tab.Screen name='TimelineScreen' component={TimelineScreen} options={tabConfig('calendar-outline')} />
                <Tab.Screen name='AddPostScreen' component={AddPostScreen} options={tabConfig('add')} />
                <Tab.Screen name='SocialScreen' component={SocialScreen} options={tabConfig('people')} />
                <Tab.Screen
                    name='CustomizationScreen'
                    component={CustomizationScreen}
                    options={tabConfig('settings')}
                />
            </Tab.Navigator>
        </NavigationContainer>
    ) : (
        <SafeAreaView>
            <LoginScreen />
        </SafeAreaView>
    );
}

export default RootNavigation;
