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
import { useRef, useState } from 'react';
import Colors from '../../constants/colors';

const PAST_WEEKS = 1;
const UPCOMING_WEEKS = 1;

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

function DayBlock({ day, selectedDate, setSelectedDate, setPage }) {
    const txt = format(day, 'EEE');
    const isSelected = isSameDay(day, selectedDate);

    return (
        <Pressable
            onPress={() => {
                setSelectedDate(day);
                setPage(PAST_WEEKS);
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

class DateRange {
    constructor() {
        this.dates = generateWeeks(new Date());
    }

    subPastWeek() {
        this.dates.splice(0, 1);
    }

    addPastWeek() {
        const newWeekStart = subWeeks(this.dates[0][0], 1);
        const newWeek = eachDayOfInterval({
            start: newWeekStart,
            end: addDays(newWeekStart, 6),
        });
        console.log(newWeek);
        this.dates.splice(0, 0, newWeek);
    }

    subNextWeek() {
        this.dates.splice(this.dates.length - 1, 1);
    }

    addNextWeek() {
        const newWeekStart = addWeeks(this.dates[this.dates.length - 1][0], 1);
        const newWeek = eachDayOfInterval({
            start: newWeekStart,
            end: addDays(newWeekStart, 6),
        });
        console.log(newWeek);
        this.dates.push(newWeek);
    }

    shiftForward(numWeeks) {
        for (let i = 0; i < numWeeks; i++) {
            this.addNextWeek();
            this.subPastWeek();
        }
    }

    shiftBackward(numWeeks) {
        for (let i = 0; i < numWeeks; i++) {
            this.addPastWeek();
            this.subNextWeek();
        }
    }
}

function WeekSlider({ selectedDate, setSelectedDate }) {
    const ref = useRef(PagerView);
    const dates = generateWeeks(selectedDate);
    const initialWeek = PAST_WEEKS;
    const dateRange = new DateRange();
    console.log(dateRange.dates);
    dateRange.shiftBackward(2);
    console.log(dateRange.dates);

    function onSliderScroll(e) {
        // Set date to the middle of the week to determine which month to display.
        // (e.g. the week between 2 months will display whichever month has the majority of dates)
        const dayIdx = selectedDate.getDay();
        setSelectedDate(dates[e.nativeEvent.position][dayIdx]);
        ref.current.setPageWithoutAnimation(PAST_WEEKS);
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
                {dates.map((week, i) => {
                    return (
                        <View key={i}>
                            <View style={styles.row}>
                                {week.map((day) => (
                                    <DayBlock
                                        key={day.getTime()}
                                        day={day}
                                        selectedDate={selectedDate}
                                        setSelectedDate={setSelectedDate}
                                        setPage={ref.current.setPageWithoutAnimation}
                                    />
                                ))}
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
