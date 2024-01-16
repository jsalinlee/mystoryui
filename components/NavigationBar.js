import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HeaderBar from './HeaderBar';
import HomeScreen from '../screens/HomeScreen';
import TimelineScreen from '../screens/TimelineScreen';
import AddPostScreen from '../screens/AddPostScreen';
import SocialScreen from '../screens/SocialScreen';
import CustomizationScreen from '../screens/CustomizationScreen';
import Colors from '../constants/colors';

function tabConfig(iconName) {
    return {
        tabBarIcon: ({ color, size }) => <Ionicons color={color} size={size} name={iconName} />,
        tabBarActiveTintColor: Colors.primary,
    };
}

function NavigationBar() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerTitle: HeaderBar,
                headerStyle: { height: 120 },
            }}
        >
            <Tab.Screen name='HomeScreen' component={HomeScreen} options={tabConfig('home')} />
            <Tab.Screen name='TimelineScreen' component={TimelineScreen} options={tabConfig('calendar-outline')} />
            <Tab.Screen name='AddPostScreen' component={AddPostScreen} options={tabConfig('add')} />
            <Tab.Screen name='SocialScreen' component={SocialScreen} options={tabConfig('people')} />
            <Tab.Screen name='CustomizationScreen' component={CustomizationScreen} options={tabConfig('settings')} />
        </Tab.Navigator>
    );
}

export default NavigationBar;

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingTop: 20,
        alignItems: 'center',
    },
    headerTitle: {
        fontFamily: 'Lemon_400Regular',
        fontSize: 24,
        color: Colors.primary,
    },
    profileButton: {},
});
