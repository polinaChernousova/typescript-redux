import { Box, Button, Container, TextField, Typography, } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useActions } from '../hooks/useAction';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { IUser } from '../types/Users';


type ParamsEditedItem = {
    id: string
}

const EditUser = () => {
   const {id} = useParams<ParamsEditedItem>()
   const  {editedUser, saveEdited} = useActions()
   const navigate = useNavigate()
   const {edit, loading, error} = useTypeSelector(state => state.userReducers)
   const [value, setValue] = useState<IUser>({ name:'', lastName:'', phone: 0,})

useEffect(()=> {
   if(edit)
    setValue(edit)
}, [edit])
 
useEffect(()=> {
   editedUser(id)
},[id])

  const handleSubmit  = () => {
  if(!value.lastName && !value.name && !value.phone) {
    return
  }
  saveEdited(id,value)
  setValue({name:"",  lastName:"", phone:0})
  navigate('/')
 } 

if(loading){
    return <h1>loading...</h1>
 }

if(error){
  return <h1>erooorrr</h1>
 }        
    
return (
 <div className='add-edit-page' style={{marginTop:"100px"}}>
     <Container>
    <form onSubmit={handleSubmit}>
        <Typography variant='h4'>Изменить новость</Typography>
        <TextField onChange={(e)=> setValue({...value, name: e.target.value})} value={value.name} style={{padding : '5px'}} variant='outlined' label='Заголовок'/>
        <TextField onChange={(e)=> setValue({...value, lastName: e.target.value})} value={value.lastName} style={{padding : '5px'}} variant='outlined' label='Новость' />
        <TextField onChange={(e)=> setValue({...value, phone: +e.target.value})} value={value.phone} style={{padding : '5px'}} variant='outlined' label='Дата' />
        <Button variant='contained' onClick={(handleSubmit)}>Сохранить изменения</Button>
        </form>
     </Container>
     </div>
   );
 };

export default EditUser;
     