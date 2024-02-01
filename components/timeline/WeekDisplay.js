import { StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';
import { format } from 'date-fns';
import WeekSlider from './WeekSlider';

function WeekDisplay() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Text style={styles.bannerText}>{format(selectedDate, 'MMMM y')}</Text>
            </View>
            <WeekSlider selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </View>
    );
}

export default WeekDisplay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    banner: {
        alignItems: 'center',
        marginVertical: 10,
    },
    bannerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});
