import { useReducer } from "react";
import { produce } from "immer";

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const ADD_VALUE = 'add-value'

const reducer = (state, action) => {
    //Reducer with Immer
    switch (action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + 1;
            return;
        case DECREMENT_COUNT:
            state.count -= 1;
            return;
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.preload;
            return;
        case ADD_VALUE:
            state.count += state.valueToAdd;
            state.valueToAdd = 0;
            return;
        default:
            return state
    }
    //Normal reducer
    // switch (action.type) {
    //     case INCREMENT_COUNT:
    //         return {
    //             ...state,
    //             count: state.count + 1
    //         }
    //     case DECREMENT_COUNT:
    //         return {
    //             ...state,
    //             count: state.count - 1
    //         }
    //     case SET_VALUE_TO_ADD:
    //         return {
    //             ...state,
    //             valueToAdd: action.preload
    //         }
    //     case ADD_VALUE:
    //         return {
    //             ...state,
    //             count: state.count + state.valueToAdd,
    //             valueToAdd: 0
    //         }
    //     default:
    //         return state
    // }
};

function useCounter(initValues) {
    const [state, dispatch] = useReducer(produce(reducer, { count: initValues, valueToAdd: 0 }));

    const updateValue = (e) => {
        const value = parseInt(e.target.value) || 0;
        dispatch({
            type: SET_VALUE_TO_ADD,
            preload: value
        });
    }

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        });
    };

    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT
        })
    };

    const addValue = (e) => {
        e.preventDefault();

        dispatch({
            type: ADD_VALUE,
        });
    };

    return {
        count: state.count,
        valueToAdd: state.valueToAdd,
        increment,
        decrement,
        addValue,
        updateValue
    }
};

export default useCounter;