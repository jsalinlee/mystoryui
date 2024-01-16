import { View, Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/colors';

function onProfilePress() {
    console.log('TODO: profile section');
}

function HeaderBar() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Capsoul</Text>
            <Pressable onPress={onProfilePress}>
                {({ pressed }) => (
                    <Ionicons name='person' color={pressed ? Colors.primaryHighlight : Colors.primary} size={30} />
                )}
            </Pressable>
        </View>
    );
}

export default HeaderBar;

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
    profileButton: {
        paddingHorizontal: 20,
    },
});
