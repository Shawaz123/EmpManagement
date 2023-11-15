import React from 'react'
import './Employee.css'
import { EmpTab } from '../EmpTable/EmpTab'
import { EmpFooter } from './EmpFooter/EmpFooter'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UpdateEmp } from '../UpdateEmp/UpdateEmp';

export const Employee = () => {
  return (
    <Router>
      <Routes>
   
        <Route path='/add-employee' Component={EmpFooter}/>
 <Route path='/' Component={EmpTab}/>
 <Route path='/update/:id' Component={UpdateEmp}/>
    
    </Routes>
    </Router>
    
  )
}
