import React, { useEffect, useState } from 'react'
import { MDBInput ,MDBBtn  } from 'mdb-react-ui-kit';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Edit() {

  const {id} =useParams()
  console.log(id);// particular employee id 
  //api call to fetch particular employee details

const navigate = useNavigate()

  const [anEmployee , setAnEmployee] =useState()
  //create a stae 
  const [empId , setEmpId] =useState('')
  const [empName , setEmpName] =useState('')
  const [empAge , setEmpAge] =useState('')
  const [empDesignation , setEmpDesignation] =useState('')
  const [empSalary , setEmpSalary] =useState('')

  const fetchEmployee= async()=>{
    const response= await axios.get('http://localhost:8000/getAnEmployee/'+id);
    console.log(response.data.employee);
    setAnEmployee(response.data.employee);
    setEmpId(response.data.employee.id);
    setEmpName(response.data.employee.name);
    setEmpAge(response.data.employee.age);
    setEmpDesignation(response.data.employee.designation);
    setEmpSalary(response.data.employee.salary);
  }
console.log(anEmployee);

const handleUpdate= async()=>{
  //api call update particular employee
  const body= {
    id:empId,
    name:empName,
    age:empAge,
    designation:empDesignation ,
    salary:empSalary
  }
  const result =await axios.post('https://ems-system-lhgm.onrender.com/updateEmployee/'+id,body)
  console.log(result);
  alert(result.data.message)
  navigate('/'); //redirecting to home 
}

  useEffect(() => {
  fetchEmployee()
  }, [])
  
  return (
    <>
    <div className="container">
    <h3 className='text-center m-3'>Update Employee  Details</h3>
<form  className='form'>
<div className='W-50' style={{marginLeft:'50PX'}}>
<MDBInput value={empId}  onChange={(e)=>setEmpId(e.target.value)}label='ID' id='formControlLg' type='text' size='lg' />
 <br />
<MDBInput value={empName} onChange={(e)=>setEmpName(e.target.value)} label='NAME' id='formControlLg' type='text' size='lg' /> 
<br />
<MDBInput  value={empAge} onChange={(e)=>setEmpAge(e.target.value)} label='AGE' id='formControlLg' type='text' size='lg' /> 
<br />
<MDBInput value={empDesignation}  onChange={(e)=>setEmpDesignation(e.target.value)} label='DESIGNATION' id='formControlLg' type='text' size='lg' /> 
<br />
<MDBInput  value={empSalary} onChange={(e)=>setEmpSalary(e.target.value)} label='SALARY' id='formControlLg' type='text' size='lg' />
 <br />
  
 <div className='text-center m-3 my-5'>
 <Link to={'/'}>
<MDBBtn className='me-5'>Back To Home</MDBBtn> 
</Link>
<MDBBtn onClick={(e)=>handleUpdate(e)} >Update</MDBBtn>
</div> 
  
    </div>  
</form>
 </div>
   </>
  )
}

export default Edit