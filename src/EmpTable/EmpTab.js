import axios from 'axios';
import './EmpTab.css'
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
// import { Navigate } from 'react-router-dom';

export const EmpTab = () => {
  const [datas, setData] = useState([])

 




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5201/api/Emp');

        setData(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData()
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5201/api/Emp?id=${id}`)
      .then(res => {
        console.log("Employee deleted successfully!");
        
      })
      .catch(err => console.log(err));
  };

  return (
    <div >
      <h1 className='heading'>Employee Management Application</h1>
      <table>
        <thead className='EmpTab'>
          <tr >
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>



          {datas.map((data, id) => (
            <tr key={id}>
              <th>{data.id}</th>
              <th>{data.name}</th>
              <th>{data.email}</th>
              <th>{data.phone}</th>
              <th>{data.address}<br/><br/> <br/> <button onClick={()=>handleDelete(data.id)} >Delete</button> l<Link to={`/update/${data.id}`}>
      <button>Update Emloyee</button>
      </Link></th>
            </tr>
          ))}


        </tbody>
      </table>
      l<Link to="/add-employee">
      <button className='EmpButton'>Add Employee</button>
      </Link>
      
    </div>
  )
}
