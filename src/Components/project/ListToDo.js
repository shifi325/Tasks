import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import { setAllTasks } from './store/actions/toDoAction'
import ToDo from './ToDo'

const ListToDo = () =>
 {

    let dis = useDispatch()  
    let userList=useSelector(store=>store.user.currentUser)
    let arrListToDo = useSelector(store => store.toDo.arrTasks)
    useEffect(() => {
        getAllListToDo()
    }, [])  
    const getAllListToDo =  () =>
     {
        let u = 'https://dummyjson.com/todo'
        fetch(u).then(response=>response.json())
        .then(data => 
            {
            const tasksArray = data.todos;
            dis(setAllTasks(tasksArray))
          }).catch(err=>console.log(err))}

          return ( <>
          <h1 >Tasks</h1>
          <div className='middle'>
            {arrListToDo&&arrListToDo.map(item=>{return (userList.firstName=="admin"|| item.userId==userList.id)&&<p key={item.id}><ToDo arrListToDo={item}></ToDo></p>})}
          </div> 
           </> );

    }
export default ListToDo;