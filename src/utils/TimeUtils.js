/**
 * Supply a link to the card header and a Date object, and it fills it with words like
 *   11th October
 *   Thursday
 *
 * @param {card} - headInfo Object
 * @param {date} - Current Date
 */
const createNiceDateForCardHeader = (card, date) => {
    let dateStr = date.getDate().toString();
    let endingToNumber = [ 'th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th' ];
    let first = Math.floor(date.getDate() / 10);
    if (first === 1) {
        // because 11th and 12th and 13th
        endingToNumber = endingToNumber.fill('th', 0, 10);
    }

    let numberToMonth = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July',
                          'August', 'September', 'October', 'November', 'December' ];
    let dayToWeekday = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    dateStr += endingToNumber[dateStr.charCodeAt(dateStr.length - 1) - '0'.charCodeAt(0)];

    card.monthDay = `${dateStr} ${numberToMonth[date.getMonth()]}`;
    card.weekDay = dayToWeekday[date.getDay()];
    card.timestamp = date;
}


module.exports = { createNiceDateForCardHeader };
