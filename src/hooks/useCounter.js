import { useReducer } from "react";

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const ADD_VALUE = 'add-value'

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case SET_VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.preload
            }
        case ADD_VALUE:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }
        default:
            return state
    }
    
    
    // if (action.type === INCREMENT_COUNT) {
    //     return {
    //         ...state,
    //         count: state.count + 1
    //     }
    // };

    // if (action.type === DECREMENT_COUNT) {
    //     return {
    //         ...state,
    //         count: state.count - 1
    //     }
    // };

    // if (action.type === SET_VALUE_TO_ADD) {
    //     return {
    //         ...state,
    //         valueToAdd: action.preload
    //     }
    // };

    // if (action.type === ADD_VALUE) {
    //     return {
    //         ...state,
    //         count: state.count + state.valueToAdd,
    //         valueToAdd: 0
    //     }
    // };
};

function useCounter(initValues) {
    const [state, dispatch] = useReducer(reducer, { count: initValues, valueToAdd: 0 })
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