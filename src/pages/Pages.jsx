import React from 'react'
import Home from './Home'
import Categories from '../components/Categories'
import Cuisine from './Cuisine'
import {Route, Routes} from 'react-router-dom';


function Pages() {
  return (
    
      <Routes>
      <Categories />
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
    </Routes>
  
    
  )
}

export default Pages