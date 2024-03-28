import {useDispatch,useSelector} from 'react-redux'
import { setOneTask,deleteTask} from './store/actions/toDoAction'
import { Skeleton, colors } from '@mui/material';
import { Card } from '@mui/material';
import Box from '@mui/material/Box';
import { CardHeader } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ListToDo from './ListToDo'

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const ToDo = ({arrListToDo}) => {
    let userList=useSelector(store=>store.user.currentUser)

    const dis=useDispatch()
    const del=async ()=>{
    let url='https://dummyjson.com/todos/'+arrListToDo.id
       const resppnse =  await fetch(url, {method: 'DELETE',})
         dis(deleteTask(arrListToDo.id))
    }
    const finishTask=()=>{
        arrListToDo.completed=true
        dis(setOneTask(arrListToDo))
    }
    return (<>
    
    <Card sx={{alignItems: 'center',width:'25vw', height:'35vh', backgroundColor:'transparent', m: 2 }}>
            {arrListToDo.todo}<br></br>
              completed? { arrListToDo.completed+' '} 
            <CardContent>
                {
                    <Typography variant="body2" color="text.secondary" component="p">
                        
     <DeleteIcon fontSize='large' className='button' type="button" value="מחק מטלה" onClick={del}></DeleteIcon>
     <CheckCircleOutlineIcon fontSize='large' className='button' type="button" value="סיימתי למלא את המטלה"onClick={finishTask}></CheckCircleOutlineIcon>                    </Typography>
                }
            </CardContent>
        </Card>
    </>  );
}
 
export default ToDo;