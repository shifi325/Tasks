import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAllUsers, setCurrentUser } from "./store/actions/userAction"
import { setAllTasks, setOneTasker,deleteTask } from "./store/actions/toDoAction"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import './Mui.css'


import axios from "axios";
import { Margin } from "@mui/icons-material";
const LogIn = () => {
    let users=useSelector(store=>store.user.allUsers)
    let user1=useSelector(store=>store.user.currentUser)
    let nav = useNavigate()
    const dis=useDispatch()
    let name="";
    let password="";
    useEffect(()=>{goToServer()},[])        

    const goToServer =  () => {
        let u = 'https://dummyjson.com/users'
        fetch(u).then(response=>response.json())
        .then(data => {
            const usersArray = data.users;
            dis(setAllUsers(usersArray))
          }).catch(err=>console.log(err))
    }

    const cheackIsAdmin=()=>
    {
    if((name!="admin")&&(password!="ad12min34"))
    {
        let user=users.filter(x=>x.password==password&&x.firstName==name)[0]
        if(user)
        {
            dis(setCurrentUser(user))
            nav('/listToDo')
        }
        else
        console.log("שם משתמש או סיסמא לא נכונים")
    } 
    else
        {               
        dis(setCurrentUser({password:"ad12min34",firstName:"admin"}))            
        nav('/users')
        }
    }
        
    

    return ( <>
     <fieldset  >
     <legend>&laquo;	<b>Log In</b> &raquo;</legend>
        <TextField className="TextField"
          id="outlined-error"
          label="name"
          onChange={(e)=>name=e.target.value}
        />
        <TextField  className="TextField"
          id="outlined-error-helper-text"
          label="password"
          type="password"
          onChange={(e)=>password=e.target.value}
        /><br></br><br></br>
        <button type='submit'  onClick={cheackIsAdmin}> <SendIcon fontSize="large"></SendIcon></button>

      </fieldset>


</>
 );
}
export default LogIn;