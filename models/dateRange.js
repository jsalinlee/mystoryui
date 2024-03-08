import { addDays, eachDayOfInterval, eachWeekOfInterval, subDays, addWeeks, subWeeks } from 'date-fns';

class DateRange {
    constructor(rootDate, numWeeksBefore, numWeeksAfter) {
        this.numWeeksBefore = numWeeksBefore;
        this.numWeeksAfter = numWeeksAfter;
        this.dates = this.generateWeeks(rootDate);
    }

    generateWeeks(date) {
        return eachWeekOfInterval({
            start: subDays(date, this.numWeeksBefore * 7),
            end: addDays(date, this.numWeeksAfter * 7),
        }).reduce((acc, cur) => {
            const allDays = eachDayOfInterval({
                start: cur,
                end: addDays(cur, 6),
            });

            acc.push(allDays);
            return acc;
        }, []);
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

    shiftWeeksForward(numWeeks) {
        for (let i = 0; i < numWeeks; i++) {
            this.addNextWeek();
            this.subPastWeek();
        }
    }

    shiftWeeksBackward(numWeeks) {
        for (let i = 0; i < numWeeks; i++) {
            this.addPastWeek();
            this.subNextWeek();
        }
    }
}

export default DateRange;
