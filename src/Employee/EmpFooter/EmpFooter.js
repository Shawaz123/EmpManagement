import React from 'react'
import './EmpFooter.css'


import { useState } from "react";
export const EmpFooter = () => {

    
   
      const [name,setName]= useState("");
      const [email,setemail]= useState("");
      const [phone,setphone]= useState("");
      const [address,setaddress]= useState("");

      function saveuser(){
        console.warn(name,email,phone,address);
        let data = {name,email,phone,address};
        fetch("http://localhost:5201/api/Emp",{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            } ,
            body: JSON.stringify(data)
            
        })
      }
    

  return (
    <div>
         <div className="App">
 
      {(
        <form>
          <label>
            Name:
            <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
          </label>
          <br />
          <label>
            Phone:
            <input type="text" name="phone" value={phone} onChange={(e)=>{setphone(e.target.value)}}/>
          </label>
          <label>
            Address:
            <input type="text" name="address" value={address} onChange={(e)=>{setaddress(e.target.value)}}/>
          </label>
          <button onClick={saveuser} type="submit">Submit</button>
        </form>
      )}
    </div>
    
    </div>
  )
}
