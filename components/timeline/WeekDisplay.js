import { StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';
import { format } from 'date-fns';
import WeekSlider from './WeekSlider';

function WeekDisplay() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <View style={styles.container}>
            <WeekSlider selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
        </View>
    );
}

export default WeekDisplay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
