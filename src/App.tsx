import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './paginas/home/home';
import axios from 'axios';
import Navbar from './components/navbar/navBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './paginas/login/Login';
import UserProvider from './contexts/UserContext';
import Cadastro from './paginas/cadastro/Cadastro';


interface User {
  id: number;
  name: string;
}


function App() {
  // const [users, setUsers] = useState<User[]>([]);
  // useEffect(() => {
  //   axios.get<User[]>('https://jsonplaceholder.typicode.com/users')
  //   .then(response => {
  //     setUsers(response.data);
  //   }
  //   ).catch(error => {
  //     console.log(error);
  //   }
  //   )

  // },[])
  return (
    <>
      {/* <BrowserRouter> */}
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/cadastro' element={<Cadastro/>} />
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
      {/* <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
            <div className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>Lista de usuarios:</div>
            <ul>
              {users.map(user => (
                <li key = {user.id}>{user.name}</li>
              ))}
            </ul>
          </div> */}
      {/* <Footer />
        </BrowserRouter> */}
    </>
  );
}
export default App;