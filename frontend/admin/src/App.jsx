import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './pages/signin'
import Home from './pages/home';
import Products from './pages/products';
import Users from './pages/users';
import Orders from './pages/orders'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Login/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/users' element={<Users />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
