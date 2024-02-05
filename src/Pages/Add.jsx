import React, { useState } from 'react'
import { MDBInput ,MDBBtn  } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Add() {

  const navigate = useNavigate();
    //need to create a state for each input
  const [id,setId] =useState(0)
  const [name,setName] =useState('')
  const [age,setAge] =useState(0)
  const [designation,setDesignation] =useState('')
  const [salary,setSalary] =useState('')

  const handleAdd= async(e)=>{
    const body={id,name,age,designation,salary}
  await axios.post('https://ems-system-lhgm.onrender.com/addEmployee',body).then((response)=>{
    alert(response.data.message)
    navigate('/');
    console.log(id,name ,age,designation,salary);
  })
.catch((error)=>{
  alert('Enter unique employee id')
});
}

  
  return (
    <>
    <div className="container">
    <h3 className='text-center m-3'>Add Employee</h3>
<form  className='form'>
<div className='W-50' style={{marginLeft:'50PX'}}>
<MDBInput onChange={(e)=>setId(e.target.value)} label='I
D' id='formControlLg' type='text' size='lg' />
 <br />
<MDBInput onChange={(e)=>setName(e.target.value)}  label='NAME' id='formControlLg' type='text' size='lg' /> 
<br />
<MDBInput  onChange={(e)=>setAge(e.target.value)}  label='AGE' id='formControlLg' type='text' size='lg' /> 
<br />
<MDBInput onChange={(e)=>setDesignation(e.target.value)} label='DESIGNATION' id='formControlLg' type='text' size='lg' /> 
<br />
<MDBInput  onChange={(e)=>setSalary(e.target.value)} label='SALARY' id='formControlLg' type='text' size='lg' />
 <br />
  
 <div className='text-center m-3 my-5'>
 <Link to={'/'}>
<MDBBtn className='me-5'>Back To Home</MDBBtn> 
</Link>
<MDBBtn  onClick={(e)=>handleAdd(e)} >Add</MDBBtn>
</div> 
  
    </div>  
</form>
 </div>
   </>
  )
}

export default Add