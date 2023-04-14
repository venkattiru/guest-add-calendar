
const generateInBtwDates = (start,end) => {
    const date = new Date(start);
    const inBtwDates = [];
    while(date.getTime() <= new Date(end).getTime()) {
        inBtwDates.push(date.toISOString().split('T')[0]);
        date.setDate(date.getDate()+1);
    }

    return inBtwDates;
}

export default generateInBtwDates;