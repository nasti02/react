import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes'; 
import Header from './components/Header';

function App() {
  
  return (
    <>
      <Header logoPath='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'/>
      <RouterProvider router={router}/>
    </>
  )
  
}

export default App;
// export default Header;