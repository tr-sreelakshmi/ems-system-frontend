import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Admin() {

    const [alEmployees ,setalEmployees]=useState([])

    // create a function to fetch data
const  fetchData =async()=>{
    const response = await axios.get('https://ems-system-lhgm.onrender.com/getEmployee')
    // console.log(response.data.employee);
  setalEmployees (response.data.employee);//array of data
  }
  console.log(alEmployees); //array of employees
 

const deleteEmp =async(id)=>{
  const response = await axios.delete('https://ems-system-lhgm.onrender.com/deleteEmployee/'+id)
  console.log(response);
  alert(response.data.message)
  fetchData()
}
  
  useEffect(()=>{
    fetchData()
  },[])



  return (
    <>
        <div className="container">
<h1 className='text-center m-3'>Employee Management System</h1>
<p style={{textAlign:'justify'}}>The term "employee management systems" is used broadly to describe a range of software systems that cover key aspects of HR admin. They are also known by other names too. Some vendors refer to their products as employee databases, while others use acronyms like HRIS (human resources information system), HCM (human capital management), or HRMS (human resource management system).Regardless of the name used, they are a type of workforce management tool that acts as a single source of truth for all your employee data. The key functions they cover include recruitment & onboarding, time and attendance tracking, performance management, training & development, payroll, and benefits administration.

Detailed Overview</p>
<Link to={'/add'}>

    {/* redirected to home page */}
    <button className='btn btn-dark m-3'><i className='fa-solid fa-user-plus me-2'></i>Add</button>
</Link>
<div>
<MDBTable small>
      <MDBTableHead>
        <tr>
          <th scope='col'>No</th>
          <th scope='col'>Name</th>
          <th scope='col'>Age</th>
          <th scope='col'>Designation</th>
          <th scope='col'>Salary</th>
          <th scope='col'>Actions</th>

        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          alEmployees.map((item)=>(
      <tr>
          <th scope='row'>{item.id}</th>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.designation}</td>
         <td>{item.salary}</td>
        <td>
        <div className='d-flex justify-content-around'>
          <Link to={'edit/'+item.id}>
            <button className='btn' >
                <i className="fa-solid fa-pen text-success p-1"></i>        
            </button>
            </Link>

            <Link to={'view/'+item.id}>
              <button className='btn' >
                  <i className='fa-solid fa-eye text-info p-1'></i>
              </button>
           </Link>
           
            <button className='btn' onClick={()=>deleteEmp(item.id)}>
                <i className='fa-solid fa-trash text-danger p-1'></i>
            </button>
          
        </div>
        </td>
        </tr>
           ))
      }
      </MDBTableBody>

    </MDBTable>
</div>
</div>
    </>
  )
}

export default Admin