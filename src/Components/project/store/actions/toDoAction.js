import * as actionType from '../../actionType'
export function deleteTask(taskId){
   return{
       type:actionType.DELETE_TASK,
       payload:taskId
   }
  
}
export function setAllTasks(arrT){
   return{
       type:actionType.SET_ALL_TASKS,
       payload:arrT
   }
   
}
export function setOneTask(task){
   return{
       type:actionType.SET_ONE_TASK,
       payload:task
   }
   }
