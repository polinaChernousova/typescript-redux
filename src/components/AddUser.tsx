import { Button, TextField, Typography, Box } from '@mui/material';
import { Container } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useActions } from '../hooks/useAction';

const AddUser = () => {
const  {addUser} = useActions()
    const [value, setValue] = useState({
        name:'',
        lastName:'',
        phone: 0,
    })

const handleSubmit  = () => {
        if(!value.lastName && !value.name && !value.phone) {
            return
     }
     addUser(value)
}

return (
<div className='add-edit-page' style={{marginTop:"100px"}}>
<Container>
<form>
   <TextField onChange={(e)=> setValue({...value, name: e.target.value})}  
     style={{padding : '5px'}} 
     variant='outlined'
     label='Заголовок'/>

    <TextField onChange={(e)=>setValue({...value, lastName: e.target.value})}
      style={{padding : '5px'}}
      variant='outlined' 
      label='Новость' />

    <TextField onChange={(e)=> setValue({...value, phone: +e.target.value})}
      style={{padding : '5px'}}
      variant='outlined'
      label='Дата' />
<Button variant='contained' onClick={(handleSubmit)}>Добавить новость</Button>

  <Link to='/users'>
  <Button
   style={{display: "flex", 
    color: "white",
    marginTop:"40px",
    backgroundColor:"green", 
    width:"200px",
    justifyContent:"center"}}
   > users </Button>
    </Link>
   </form>
</Container>
</div>
 );
};

export default AddUser;