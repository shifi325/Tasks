import * as actionType from '../../actionType'
const initialState = {
    currentUser: null,
    allUsers: []

}
export default function userReducer  (state = initialState, action) {
    switch (action.type) {
        case actionType.SET_CURRENT_USER:
            return {
                ...state,
               currentUser:action.payload,               
            }
        case actionType.SET_ALL_USERS:
            return {
                ...state,             
              allUsers:action.payload
            }
    }
    return state
}
