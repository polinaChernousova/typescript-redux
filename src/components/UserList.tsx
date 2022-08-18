import { Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useActions } from '../hooks/useAction';
import { useTypeSelector } from '../hooks/useTypeSelector';
import CardUser from './CardUser';

const UserList = () => {
    const {getUsers} = useActions()
    const {error, loading, user} = useTypeSelector(state => state.userReducers)
   
   
    useEffect(()=> {
    getUsers()
    }, [])


   if(loading){
    return <h1>loading...</h1>
   }

    if(error){
        return <h1>erooorrr</h1>
    }

return (
<> 
 <Container>
    <h1 style={{ margin:"30px"}}>Чекните последние новости</h1>
      <div style={{display:"flex"}}> 
 {user?.map
    ( item => <CardUser key={item.id} item={item}/>
  )}
  </div>
</Container>
</>
)};

export default UserList;