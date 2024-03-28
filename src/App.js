import { useDispatch, useSelector } from 'react-redux';
import {useNavigate, BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import Users from './Components/project/Users'
import ListToDo from './Components/project/ListToDo'
import LogIn from './Components/project/LogIn'
import User from './Components/project/User'
function App() {

  return (
    
          <>
          <div>       
         <BrowserRouter> 
          <Routes>
          <Route path='/' element={<LogIn></LogIn>}></Route>
          <Route path='users'  element={<Users></Users>}> </Route>
          <Route path='listToDo' element={<ListToDo></ListToDo>}> </Route> 
          </Routes>
          </BrowserRouter>
          </div>

         </>
  );
}
export default App;
