import {
    addDays,
    eachDayOfInterval,
    eachWeekOfInterval,
    format,
    isSameDay,
    subDays,
    addWeeks,
    subWeeks,
} from 'date-fns';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useEffect, useRef, useState } from 'react';

import Colors from '../../constants/colors';
import DateRange from '../../models/dateRange';

const PAST_WEEKS = 1;
const UPCOMING_WEEKS = 1;

function DayBlock({ day, selectedDate, setSelectedDate, setPage }) {
    const txt = format(day, 'EEE');
    const isSelected = isSameDay(day, selectedDate);

    return (
        <Pressable
            onPress={() => {
                setSelectedDate(day);
                // setPage(PAST_WEEKS);
            }}
            style={styles.dateContainer}
            key={day.getTime()}
        >
            <View style={isSelected ? styles.selectedDay : styles.day}>
                <Text style={isSelected && styles.selectedDay}>{txt}</Text>
                <Text style={isSelected && styles.selectedDay}>{day.getDate()}</Text>
            </View>
        </Pressable>
    );
}

function WeekSlider({ selectedDate, handlePressDate }) {
    const ref = useRef(PagerView);
    // const dates = generateWeeks(selectedDate);
    const initialWeek = PAST_WEEKS;
    const [desiredIdx, setDesiredIdx] = useState(PAST_WEEKS);
    const dateRange = new DateRange(selectedDate, PAST_WEEKS, UPCOMING_WEEKS);
    // console.log(dateRange.dates);

    useEffect(() => {
        onPressDate(dateRange.dates[desiredIdx][selectedDate.getDay()]);
    }, [desiredIdx]);

    function onPressDate(day) {
        handlePressDate(day);
        ref.current.setPageWithoutAnimation(PAST_WEEKS);
    }

    function onSliderScroll(e) {
        // Set date to the middle of the week to determine which month to display.
        // (e.g. the week between 2 months will display whichever month has the majority of dates)
        console.log(e.nativeEvent.position);
        // const dayIdx = selectedDate.getDay();
        setDesiredIdx(e.nativeEvent.position);
        // onPressDate(dateRange.dates[e.nativeEvent.position][dayIdx]);
        // setDesiredDate(dateRange.dates[e.nativeEvent.position][dayIdx]);
        // console.log(dateRange.dates[e.nativeEvent.position][dayIdx]);
        // ref.current.setPageWithoutAnimation(desiredIdx);
        // onPressDate(dateRange.dates[e.nativeEvent.position][dayIdx]);
    }

    return (
        <View style={styles.container}>
            <PagerView
                ref={ref}
                style={styles.container}
                initialPage={initialWeek}
                onPageSelected={onSliderScroll}
                onMoveShouldSetResponderCapture={true}
            >
                {dateRange.dates.map((week, i) => {
                    return (
                        <View key={i}>
                            <View style={styles.row}>
                                {week.map((day) => {
                                    const txt = format(day, 'EEE');
                                    const isSelected = isSameDay(day, selectedDate);
                                    // <DayBlock
                                    //     key={day.getTime()}
                                    //     day={day}
                                    //     selectedDate={selectedDate}
                                    //     setSelectedDate={setSelectedDate}
                                    //     setPage={ref.current.setPageWithoutAnimation}
                                    // />

                                    return (
                                        <Pressable
                                            onPress={onPressDate.bind(this, day)}
                                            style={styles.dateContainer}
                                            key={day.getTime()}
                                        >
                                            <View style={isSelected ? styles.selectedDay : styles.day}>
                                                <Text style={isSelected && styles.selectedDay}>{txt}</Text>
                                                <Text style={isSelected && styles.selectedDay}>{day.getDate()}</Text>
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
    selectedDay: {
        alignItems: 'center',
        color: '#fff',
    },
    dateContainer: {
        backgroundColor: Colors.primary,
        borderRadius: 4,
        flex: 1,
        margin: 1,
        paddingVertical: 10,
    },
});
