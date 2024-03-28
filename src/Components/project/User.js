import { Card } from '@mui/material';
import Box from '@mui/material/Box';
import { CardHeader } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardMedia } from '@mui/material';
import { Typography } from '@mui/material';
import { Avatar } from '@mui/material';


const User = ({user}) => {

    return ( 
<Card  className='Card' sx={{width:'25vw', height:'35vh', backgroundColor:'transparent'}}>
            <CardHeader avatar={<Avatar alt="Ted talk" src={user.image} />}
                title={user.firstName + " " + user.lastName}
                subheader={user.gender + " " + user.age} />
            <CardContent>
                {
                    <Typography variant="body2" color="text.secondary" component="p">
                        {user.address.address + " " + user.address.city}
                    </Typography>
                }
            </CardContent>
        </Card>
   );

}

 

export default User;