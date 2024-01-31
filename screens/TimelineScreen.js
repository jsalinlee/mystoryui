import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Calendar, CalendarList, WeekCalendar } from 'react-native-calendars';
import { useState } from 'react';

import { POSTS } from '../data/dummy-data';
import MonthDisplay from '../components/timeline/MonthDisplay';
import WeekDisplay from '../components/timeline/WeekDisplay';

/*
    Timeline Screen displays current day view with the day's posts in a feed by default.
    User can change view to weekly/monthly views.
*/
function TimelineScreen() {
    const [currentPosts, setCurrentPosts] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    function getPostsByDay(day) {
        const posts = POSTS.filter((post) => {
            const postDate = new Date(post.date).getTime();
            return postDate === day.timestamp;
        });
        setCurrentPosts(posts);
    }
    return (
        <View style={styles.container}>
            {/* <CalendarList onDayPress={(day) => getPostsByDay(day)} horizontal={true} pagingEnabled={true} /> */}
            <WeekDisplay />
            <View>
                <FlatList
                    data={currentPosts}
                    renderItem={({ item }) => {
                        console.log(item);
                        return (
                            // (TODO: Post component)
                            <View>
                                <Text>{item.title}</Text>
                            </View>
                        );
                    }}
                    keyExtractor={(post) => post.id}
                />
            </View>
        </View>
    );
}

export default TimelineScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
