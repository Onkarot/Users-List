import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import UserList from './component/UserList';
import UpdateUser from './component/UpdateUser';


function App() {
  return (
   <div>
      <Routes>
        <Route path='' element={<Login />}/>
        <Route path='users' element={<UserList/>}/>
        <Route path='edit/:id' element={<UpdateUser />}/>
      </Routes>
   </div>
  );
}

export default App;
