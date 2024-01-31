import { addDays, eachDayOfInterval, eachWeekOfInterval, format, subDays } from 'date-fns';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useState } from 'react';
import Colors from '../../constants/colors';

// const dates = eachWeekOfInterval({
//     start: subDays(new Date(), 14),
//     end: addDays(new Date(), 14),
// }).reduce((acc, cur) => {
//     const allDays = eachDayOfInterval({
//         start: cur,
//         end: addDays(cur, 6),
//     });

//     acc.push(allDays);
//     return acc;
// }, []);

const PAST_WEEKS = 10;
const UPCOMING_WEEKS = 2;

function generateWeeks(selectedDate) {
    return eachWeekOfInterval({
        start: subDays(selectedDate, PAST_WEEKS * 7),
        end: addDays(selectedDate, UPCOMING_WEEKS * 7),
    }).reduce((acc, cur) => {
        const allDays = eachDayOfInterval({
            start: cur,
            end: addDays(cur, 6),
        });

        acc.push(allDays);
        return acc;
    }, []);
}

function WeekSlider({ selectedDate, setSelectedDate }) {
    const [displayedWeek, setDisplayedWeek] = useState(selectedDate);
    const dates = generateWeeks(selectedDate);
    const initialWeek = dates.length - 3;

    function onSliderScroll(e) {
        setDisplayedWeek(dates[e.nativeEvent.position][0]);
    }

    return (
        <View style={styles.container}>
            <View>
                <Text>{format(displayedWeek, 'MMMM y')}</Text>
            </View>
            <PagerView
                style={styles.container}
                initialPage={initialWeek}
                onPageSelected={onSliderScroll}
                onMoveShouldSetResponderCapture={true}
            >
                {dates.map((week, i) => {
                    return (
                        <View key={i}>
                            <View style={styles.row}>
                                {week.map((day) => {
                                    const txt = format(day, 'EEEEE');
                                    return (
                                        <Pressable
                                            onPress={() => {
                                                console.log(day);
                                            }}
                                            style={styles.dateContainer}
                                        >
                                            <View style={styles.day} key={day.getTime()}>
                                                <Text>{txt}</Text>
                                                <Text>{day.getDate()}</Text>
                                            </View>
                                        </Pressable>
                                    );
                                })}
                            </View>
                        </View>
                    );
                })}
            </PagerView>
        </View>
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
    dateContainer: {
        backgroundColor: Colors.primary,
        borderRadius: '4',
        flex: 1,
        margin: 1,
        paddingVertical: 10,
    },
});
