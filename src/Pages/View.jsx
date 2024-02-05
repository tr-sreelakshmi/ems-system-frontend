import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardImage,
  MDBListGroupItem,
  MDBListGroup,
  MDBBtn
} from 'mdb-react-ui-kit';


function View() {
  const {id}=useParams()
  console.log(id);

  const [anEmployee , setAnEmployee] =useState()// state 


  const fetchEmployee= async()=>{
    const response= await axios.get('https://ems-system-lhgm.onrender.com/getAnEmployee/'+id);
    console.log(response.data.employee);
   setAnEmployee(response.data.employee);
  }
  console.log(anEmployee);

  useEffect(() => {
    fetchEmployee()
    }, [])
  return (
   <div >
<div className="container p-5 ">
<MDBCard className='alignItems: "center" '>
      {/* <MDBCardImage style={{ height:'100px' ,width:'50px' ,textalign:'center' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSumG9PJ-oVCbdZqXsHh0ycF4P9Cf3q-cZk-g&usqp=CAU' position='top' alt='...' /> */}
      <MDBCardBody>

        <MDBCardTitle className=' text-center text-primary mb-4'>EMPLOYEE DETAILS</MDBCardTitle>
        <MDBCardText>

          <MDBListGroup style={{ minWidth: '15rem' , width:'100%' }} light>
      
      <MDBListGroupItem noBorders color='primary' className='px-3 mb-2 rounded-3'>
      Employee Id : {anEmployee?.id}
      </MDBListGroupItem>
      <MDBListGroupItem noBorders color='secondary' className='px-3 mb-2 rounded-3'>
      Name : {anEmployee?.name} 
      </MDBListGroupItem>
      <MDBListGroupItem noBorders color='success' className='px-3 mb-2 rounded-3'>
      Age : {anEmployee?.age}
      </MDBListGroupItem>
      <MDBListGroupItem noBorders color='danger' className='px-3 mb-2 rounded-3'>
      Designation : {anEmployee?.designation} 
      </MDBListGroupItem>
      <MDBListGroupItem noBorders color='warning' className='px-3 mb-2 rounded-3'>
      Salary : {anEmployee?.salary}
      </MDBListGroupItem>
      </MDBListGroup>


        </MDBCardText>
        <div className='text-center'>
        <MDBBtn  href='/'>Back To Home</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>

    </div>
        </div>
  )
}

export default View