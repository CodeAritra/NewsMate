import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { NewsComponent } from './components/NewsComponent'
import {
     BrowserRouter,
     Routes,
     Route,
   } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<NewsComponent pageSize="21" country="in" category=""/>}/>
        <Route path="/Business" element={<NewsComponent pageSize="21" country="in" category="Business"/>}/>
        <Route path="/Entertainment" element={<NewsComponent pageSize="21" country="in" category="Entertainment"/>}/>
        <Route path="/Health" element={<NewsComponent pageSize="21" country="in" category="Health"/>}/>
        <Route path="/Sports" element={<NewsComponent pageSize="21" country="in" category="Sports"/>}/>
        <Route path="/Science" element={<NewsComponent pageSize="21" country="in" category="Science"/>}/>
        <Route path="/Technology" element={<NewsComponent pageSize="21" country="in" category="Technology"/>}/>
        <Route path="/General" element={<NewsComponent pageSize="21" country="in" category="General"/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}

export default App
