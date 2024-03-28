import * as actionType from '../../actionType'
const initialState = {
    arrTasks: []
}
export default function toDoReducer(state = initialState, action) {
    switch (action.type) {
        case actionType.DELETE_TASK:
            let copy = state.arrTasks.filter(x => x.id != action.payload)
            return {
                ...state,
                arrTasks: copy
            }
        case actionType.SET_ALL_TASKS:
            return {
                ...state,
                arrTasks: action.payload
            }
        case actionType.SET_ONE_TASK:
            let copy2 = state.arrTasks.map(x => { return (x.id == action.payload.id ? action.payload : x) })
            return {
                ...state,
                arrTasks: copy2
            }
    }
    return state
}

