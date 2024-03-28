import * as actionType from '../../actionType'
 export function setAllUsers(arrU){
    return{
        type:actionType.SET_ALL_USERS,
        payload:arrU
    }
  
}
export function setCurrentUser(user){
    return{
        type:actionType.SET_CURRENT_USER,
        payload:user
    }
    
}
