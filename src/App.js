import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.scss'
import Home from './components/Home/Home';
import Sidebar from './components/sidebar/Sidebar';
import About from './components/About/About';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';
import Chat from './Chat';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route index element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/skill" element={<Skills/>}/>
      </Routes>
      <Chat/>
      </BrowserRouter>
    </div>
  )
}

export default App
