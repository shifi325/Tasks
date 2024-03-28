import {useSelector} from 'react-redux'
import { useState } from "react";
import { Link,Outlet } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import User from './User';



const Users = () => {
    let gender="";
        let arrUsers = useSelector(store => store.user.allUsers)
         const [filter1, setFilter1]=useState(arrUsers)
         let nav = useNavigate()
        return ( <>                
        <button onClick={()=>{setFilter1(arrUsers.slice().sort((a,b)=>a.age-b.age))}}>גיל מהקטן לגדול</button> 
        <br></br><br></br>
        <input type="text" onChange={(e)=>gender=e.target.value} placeholder='female/male'></input>
        <button  onClick={() =>{setFilter1 (arrUsers.slice().filter(i => i.gender==gender))}}>סינון זכר/נקבה</button>
        <br></br><br></br>
        <button onClick={()=>{nav('/listToDo')}}>לצפיה בכל המשימות</button>      
        <div className='middle'>  
        {filter1&&filter1.map(item=>{return<p key={item.id}><User user={item}></User></p>})}
        </div> 
</>);
}
    export default Users;


