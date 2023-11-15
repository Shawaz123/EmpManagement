import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const UpdateEmp = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:5201/api/Emp/${id}`)
      .then(res => {
        setValues(prevValues => ({
          ...prevValues,
          name: res.data.name,
          email: res.data.email,
          phone: res.data.phone,
          address: res.data.address
        }));
      })
      .catch(err => console.log(err));
  }, [id]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5201/api/Emp?id=${id}`, values)
      .then(res => {
        navigate('/');
      })
      .catch(err => console.log(err));
  };





  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={values.name} onChange={e => setValues(prevValues => ({ ...prevValues, name: e.target.value }))} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={values.email} onChange={e => setValues(prevValues => ({ ...prevValues, email: e.target.value }))} />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" name="phone" value={values.phone} onChange={e => setValues(prevValues => ({ ...prevValues, phone: e.target.value }))} />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={values.address} onChange={e => setValues(prevValues => ({ ...prevValues, address: e.target.value }))} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
