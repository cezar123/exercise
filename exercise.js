let students = ['Eden', 'Refael', 'Yoni', 'Nitzan', 'Hadas'];

let attendees = [
    ['Eden', 'Refael', 'Yoni', 'Nitzan', 'Hadas', 'Ortal'],
    ['Berry', 'Nitzan', 'Yoni', 'Eden', 'Hadas', 'Ortal'],
    ['Maxim', 'Ortal', 'Yoni', 'Refael', 'Nitzan', 'Alex'],
    ['Eden', 'Andrew', 'Yoni', 'Nitzan', 'Ortal', 'Nitzan']
];

const N = 3;

const topNStudentsAttendees = (students, attendees, N) => {
    let output = {};

    for(let lesson of attendees) {
        // remove duplicates
        let uniqueLesson = [...new Set(lesson)];

        for (let attendee of uniqueLesson) {

            if (students.indexOf(attendee) < 0) {
                continue;
            }

            if(!output.hasOwnProperty(attendee)){
                output[attendee] = 1;
            } else {
                output[attendee]++;
            }
        }
    }

    return Object.entries(output)
        .sort(([,a], [,b]) => b - a)
        .slice(0, N);

}

topNStudentsAttendees(students, attendees, N);