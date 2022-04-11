const DemoData = {
    resources: [{
            id: 'r0',
            name: 'Espoo',
            groupOnly: true,
        },
        {
            id: 'r1',
            name: 'Sairaalan maalaus',
            parentId: 'r0',
        },
        {
            id: 'r2',
            name: 'Maalien osto',
            parentId: 'r1',
        },
        {
            id: 'r3',
            name: 'Pensselien lajittelu',
            parentId: 'r1',
        },
        {
            id: 'r4',
            name: 'Seinien putsaus',
            parentId: 'r1',
        },
        {
            id: 'r5',
            name: 'Kahvin keitto',
        },
        {
            id: 'r6',
            name: 'Siivous',
        },
        {
            id: 'r7',
            name: 'Vantaa',
        },
        {
            id: 'r8',
            name: 'Pois muutto',
            parentId: 'r7',
        },
        {
            id: 'r9',
            name: 'Kaikki haluaa Espooseen',
            parentId: 'r7',
        },
    ],
    events: [{
            id: 1,
            start: '2022-03-14 09:30:00',
            end: '2022-03-18 23:30:00',
            resourceId: 'r0',
            title: 'Työmäärä 35h',
            bgColor: '#D9D9D9',
            showPopover: false
        },
        {
            id: 2,
            start: '2022-03-14 03:30:00',
            end: '2022-03-15 23:30:00',
            resourceId: 'r1',
            title: 'Nyt maalataan',
            resizable: false
        },
        {
            id: 3,
            start: '2022-03-14 03:30:00',
            end: '2022-03-16 23:30:00',
            resourceId: 'r2',
            title: 'I am not movable',
            movable: false
        },
        {
            id: 4,
            start: '2022-03-15 14:30:00',
            end: '2022-03-18 23:30:00',
            resourceId: 'r4',
            title: 'I am not start-resizable',
            startResizable: false,
        },
        {
            id: 5,
            start: '2022-03-14 15:30:00',
            end: '2022-03-18 23:30:00',
            resourceId: 'r5',
            title: 'I am not end-resizable',
            endResizable: false
        },
        {
            id: 6,
            start: '2022-03-14 15:35:00',
            end: '2022-03-16 23:30:00',
            resourceId: 'r6',
            title: 'I am normal'
        },
        {
            id: 7,
            start: '2022-03-09 15:40:00',
            end: '2022-03-16 23:30:00',
            resourceId: 'r7',
            title: 'Äkkiä POIS!!!',
            bgColor: '#FA9E95'
        },
        {
            id: 8,
            start: '2022-03-17 15:50:00',
            end: '2022-03-19 23:30:00',
            resourceId: 'r8',
            title: 'I am locked',
            movable: false,
            resizable: false,
            bgColor: 'red'
        },
        {
            id: 9,
            start: '2022-03-14 16:30:00',
            end: '2022-03-18 23:30:00',
            resourceId: 'r1',
            title: 'Työntekijä 1'
        },
        {
            id: 10,
            start: '2022-03-15 17:30:00',
            end: '2022-03-15 23:30:00',
            resourceId: 'r1',
            title: 'R1 has recurring tasks every week on Tuesday, Friday',
            rrule: 'FREQ=WEEKLY;DTSTART=20220315T013000Z;BYDAY=TU,FR',
            bgColor: '#f759ab'
        },
        {
            id: 11,
            start: '2022-03-15 18:30:00',
            end: '2022-03-16 23:30:00',
            resourceId: 'r1',
            title: 'Työntekijä 3'
        },
        {
            id: 3,
            start: '2022-03-15 18:30:00',
            end: '2022-03-16 23:30:00',
            resourceId: 'r1',
            title: 'Työntekijä 4'
        },
        {
            id: 13,
            start: '2022-03-14 18:30:00',
            end: '2022-03-17 23:30:00',
            resourceId: 'r9',
            title: 'Jee me muutetaan Espooseen!'
        },
    ]
}

export default DemoData