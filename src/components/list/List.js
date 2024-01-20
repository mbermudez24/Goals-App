import Goal from "./Goal";

const ListMock = [{
    "id": "1",
    "details": 'Run for 30 minutes',
    "period": "day",
    "events": 1,
    "icon": "🏃‍♂️",
    "goal": 365,
    "deadline": "2030-01-01",
    "completed": 5
},
{
    "id": "2",
    "details": 'Read Books',
    "period": "year",
    "events": 6,
    "icon": "📚",
    "goal": 12,
    "deadline": "2030-01-01",
    "completed": 0
},
{
    "id": "3",
    "details": 'Travel',
    "period": "month",
    "events": 1,
    "icon": "✈️",
    "goal": 60,
    "deadline": "2030-01-01",
    "completed": 40
}
];

function List() {
    return (
        ListMock.map(goal => <Goal{...goal}></Goal>)

    );
}

export default List;