import { addDays, eachDayOfInterval, eachWeekOfInterval, format, subDays } from 'date-fns';
import { StyleSheet, Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';

const dates = eachWeekOfInterval({
    start: subDays(new Date(), 14),
    end: addDays(new Date(), 14),
}).reduce((acc, cur) => {
    const allDays = eachDayOfInterval({
        start: cur,
        end: addDays(cur, 6),
    });

    acc.push(allDays);
    return acc;
}, []);

console.log(dates); // (TODO: remove)

function WeekSlider() {
    return (
        <PagerView style={styles.container}>
            {dates.map((week, i) => {
                return (
                    <View key={i}>
                        <View style={styles.row}>
                            {week.map((day) => {
                                const txt = format(day, 'EEEEE');
                                return (
                                    <View style={styles.day} key={day.getTime()}>
                                        <Text>{txt}</Text>
                                        <Text>{day.getDate()}</Text>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                );
            })}
        </PagerView>
    );
}

export default WeekSlider;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    day: {
        alignItems: 'center',
    },
});
