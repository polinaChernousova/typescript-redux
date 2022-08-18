import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import MainPage from './pages/MainPage';

const MyRooutes = () => {
    return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<MainPage/>} />
          <Route path='/admin-panel-add' element={<AddUser/>} />
          <Route path='/users' element={<UserList/>} />
           <Route path='/edit/:id' element={<EditUser/>} />
    </Routes>
    </BrowserRouter>
    );
};

export default MyRooutes;