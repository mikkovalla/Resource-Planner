const DemoData = {
    resources: [
        {
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
    events: [
        {
            id: 1,
            start: '2022-03-18 09:30:00',
            end: '2022-03-19 23:30:00',
            resourceId: 'r1',
            title: 'I am finished',
            bgColor: '#D9D9D9',
            showPopover: false
        },
        {
            id: 2,
            start: '2022-03-18 03:30:00',
            end: '2022-03-26 23:30:00',
            resourceId: 'r2',
            title: 'I am not resizable',
            resizable: false
        },
        {
            id: 3,
            start: '2022-03-19 03:30:00',
            end: '2022-03-20 23:30:00',
            resourceId: 'r3',
            title: 'I am not movable',
            movable: false
        },
        {
            id: 4,
            start: '2022-03-19 14:30:00',
            end: '2022-03-20 23:30:00',
            resourceId: 'r4',
            title: 'I am not start-resizable',
            startResizable: false,
        },
        {
            id: 5,
            start: '2022-03-19 15:30:00',
            end: '2022-03-20 23:30:00',
            resourceId: 'r5',
            title: 'I am not end-resizable',
            endResizable: false
        },
        {
            id: 6,
            start: '2022-03-19 15:35:00',
            end: '2022-03-19 23:30:00',
            resourceId: 'r6',
            title: 'I am normal'
        },
        {
            id: 7,
            start: '2022-03-19 15:40:00',
            end: '2022-03-20 23:30:00',
            resourceId: 'r7',
            title: 'I am exceptional',
            bgColor: '#FA9E95'
        },
        {
            id: 8,
            start: '2022-03-19 15:50:00',
            end: '2022-03-19 23:30:00',
            resourceId: 'r1',
            title: 'I am locked',
            movable: false,
            resizable: false,
            bgColor: 'red'
        },
        {
            id: 9,
            start: '2022-03-19 16:30:00',
            end: '2022-03-27 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 1'
        },
        {
            id: 10,
            start: '2022-03-19 17:30:00',
            end: '2022-03-19 23:30:00',
            resourceId: 'r1',
            title: 'R1 has recurring tasks every week on Tuesday, Friday',
            rrule: 'FREQ=WEEKLY;DTSTART=20220319T013000Z;BYDAY=TU,FR',
            bgColor: '#f759ab'
        },
        {
            id: 11,
            start: '2022-03-19 18:30:00',
            end: '2022-03-20 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 3'
        },
        {
            id: 3,
            start: '2022-03-20 18:30:00',
            end: '2022-03-20 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 4'
        },
        {
            id: 13,
            start: '2022-03-21 18:30:00',
            end: '2022-03-24 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 5'
        },
        {
            id: 14,
            start: '2022-03-23 18:30:00',
            end: '2022-03-27 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 6'
        },
    ],
    eventsForTaskView: [
        {
            id: 1,
            start: '2022-03-18 09:30:00',
            end: '2022-03-18 23:30:00',
            resourceId: 'r1',
            title: 'I am finished',
            bgColor: '#D9D9D9',
            groupId: 1,
            groupName: 'Task1'
        },
        {
            id: 2,
            start: '2022-03-18 03:30:00',
            end: '2022-03-26 23:30:00',
            resourceId: 'r2',
            title: 'I am not resizable',
            resizable: false,
            groupId: 2,
            groupName: 'Task2'
        },
        {
            id: 3,
            start: '2022-03-19 03:30:00',
            end: '2022-03-20 23:30:00',
            resourceId: 'r3',
            title: 'I am not movable',
            movable: false,
            groupId: 3,
            groupName: 'Task3'
        },
        {
            id: 7,
            start: '2022-03-19 15:40:00',
            end: '2022-03-20 23:30:00',
            resourceId: 'r7',
            title: 'I am exceptional',
            bgColor: '#FA9E95',
            groupId: 4,
            groupName: 'Task4'
        },
        {
            id: 4,
            start: '2022-03-20 14:30:00',
            end: '2022-03-21 23:30:00',
            resourceId: 'r4',
            title: 'I am not start-resizable',
            startResizable: false,
            groupId: 1,
            groupName: 'Task1'
        },
        {
            id: 5,
            start: '2022-03-21 15:30:00',
            end: '2022-03-22 23:30:00',
            resourceId: 'r5',
            title: 'I am not end-resizable',
            endResizable: false,
            groupId: 3,
            groupName: 'Task3'
        },
        {
            id: 9,
            start: '2022-03-21 16:30:00',
            end: '2022-03-21 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks',
            groupId: 4,
            groupName: 'Task4'
        },
        {
            id: 6,
            start: '2022-03-22 15:35:00',
            end: '2022-03-23 23:30:00',
            resourceId: 'r6',
            title: 'I am normal',
            groupId: 1,
            groupName: 'Task1'
        },
        {
            id: 8,
            start: '2022-03-25 15:50:00',
            end: '2022-03-26 23:30:00',
            resourceId: 'r1',
            title: 'I am locked',
            movable: false,
            resizable: false,
            bgColor: 'red',
            groupId: 1,
            groupName: 'Task1'
        },
        {
            id: 10,
            start: '2022-03-26 18:30:00',
            end: '2022-03-26 23:30:00',
            resourceId: 'r2',
            title: 'R2 has many tasks',
            groupId: 4,
            groupName: 'Task4'
        },
        {
            id: 11,
            start: '2022-03-27 18:30:00',
            end: '2022-03-27 23:30:00',
            resourceId: 'r14',
            title: 'R4 has many tasks',
            groupId: 4,
            groupName: 'Task4'
        },
        {
            id: 3,
            start: '2022-03-28 18:30:00',
            end: '2022-03-28 23:30:00',
            resourceId: 'r6',
            title: 'R6 has many tasks',
            groupId: 3,
            groupName: 'Task3'
        },
    ],
    eventsForCustomEventStyle: [
        {
            id: 1,
            start: '2022-03-18 09:30:00',
            end: '2022-03-19 23:30:00',
            resourceId: 'r1',
            title: 'I am finished',
            bgColor: '#D9D9D9',
            type: 1
        },
        {
            id: 2,
            start: '2022-03-18 03:30:00',
            end: '2022-03-26 23:30:00',
            resourceId: 'r2',
            title: 'I am not resizable',
            resizable: false,
            type: 2
        },
        {
            id: 3,
            start: '2022-03-19 03:30:00',
            end: '2022-03-20 23:30:00',
            resourceId: 'r3',
            title: 'I am not movable',
            movable: false,
            type: 3
        },
        {
            id: 4,
            start: '2022-03-19 14:30:00',
            end: '2022-03-20 23:30:00',
            resourceId: 'r4',
            title: 'I am not start-resizable',
            startResizable: false,
            type: 1
        },
        {
            id: 5,
            start: '2022-03-19 15:30:00',
            end: '2022-03-20 23:30:00',
            resourceId: 'r5',
            title: 'I am not end-resizable',
            endResizable: false,
            type: 2
        },
        {
            id: 6,
            start: '2022-03-19 15:35:00',
            end: '2022-03-19 23:30:00',
            resourceId: 'r6',
            title: 'I am normal',
            type: 3
        },
        {
            id: 7,
            start: '2022-03-19 15:40:00',
            end: '2022-03-20 23:30:00',
            resourceId: 'r7',
            title: 'I am exceptional',
            bgColor: '#FA9E95',
            type: 1
        },
        {
            id: 8,
            start: '2022-03-19 15:50:00',
            end: '2022-03-19 23:30:00',
            resourceId: 'r1',
            title: 'I am locked',
            movable: false,
            resizable: false,
            bgColor: 'red',
            type: 2
        },
        {
            id: 9,
            start: '2022-03-19 16:30:00',
            end: '2022-03-27 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 1',
            type: 3
        },
        {
            id: 10,
            start: '2022-03-20 18:30:00',
            end: '2022-03-20 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 2',
            type: 1
        },
        {
            id: 11,
            start: '2022-03-21 18:30:00',
            end: '2022-03-22 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 3',
            type: 2
        },
        {
            id: 3,
            start: '2022-03-23 18:30:00',
            end: '2022-03-27 23:30:00',
            resourceId: 'r1',
            title: 'R1 has many tasks 4',
            type: 3
        },
    ],
}

export default DemoData
