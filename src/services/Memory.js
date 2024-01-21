import { createContext, useReducer } from "react";


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

const initialState = {
    order: [],
    objects: {}
};

function reducer(state, action) {
    switch (action.type) {
        case 'put': {
            const goals = action.goals;
            const newState = {
                order: goals.map(goal => goal.id),
                objects: goals.reduce((object, goal) => ({ ...object, [goal.id]: goal }), {})
            };
            return newState;
        };
        case 'create': {
            const id = Math.random(); //action.goal.id;
            const newState = {
                order: [...state.order, id],
                objects: {
                    ...state.objects,
                    [id]: { id, ...action.meta }
                }
            };
            return newState;
        };
        case 'update': {
            const id = action.goal.id;
            state.objects[id] = {
                ...state.objects[id],
                ...action.goal
            };
            const newState = { ...state };
            return newState;
        }
        case 'remove': {
            const id = action.id;
            const newOrder = state.order.filter(item => item != id);
            delete state.objects[id];
            const newState = {
                order: newOrder,
                objects: state.objects
            };
            return newState;
        }
    }
};

const goals = reducer(initialState, { type: 'put', goals: ListMock });

export const Context = createContext(null);

function Memory({ children }) {
    const [state, send] = useReducer(reducer, goals);
    return (
        <Context.Provider value={[state, send]}>
            {children}
        </Context.Provider>
    );
}

export default Memory;