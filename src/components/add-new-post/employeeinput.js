import React,{useState} from "react";
import { Card, CardBody, Form } from "shards-react";
import "../add-new-post/TestInput.css"
import { employeeList } from '../../data/Employee-list';
import TestsData from '../../views/Admin/services/testsData';
import {useNavigate} from 'react-router-dom'

function EmployeeInput(){

  const navigate = useNavigate()
  const [id,setId]=useState('')
  const [name,setName]=useState('')
  const [phone,setPhone]= useState()
  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')
  const [add,setAdd]=useState('')

  const savedata=async()=>{
    alert("New employee added successfully");
    const data={
      id:employeeList.length+1,
      emp_id:id,
      name:name,
      phone:phone,
      email:email,
      add:add,
      password:pass
    }
    const tests= await TestsData.addemp(data)
    navigate('/manage-employee')
  };

  return(
    <div>
      <Card large className="mb-3">
      <CardBody>
      <Form className="add-new-post">
        <label className='label'>Id : </label><input type='text' placeholder='id' className='Title' style = {{marginLeft:"1.25%"}}onChange={(e)=>setId(e.target.value)}/><br/>
        <label className='label'>Name: </label><input type='text' placeholder='alex' className='Title' style={{marginLeft:'-1%'}} onChange={(e)=>setName(e.target.value)}/><br/>
        <label className='label'>Phone No: </label><input type='number' placeholder='0909094563' className='Title' style={{marginLeft:'-3.5%'}} onChange={(e)=>setPhone(e.target.value)}/><br/>
        <label className='label'>Mail: </label><input type='text' placeholder='albus@email.com' className='Title' style={{marginLeft:'-0.2%'}} onChange={(e)=>setEmail(e.target.value)}/><br/>
        <label className='label'>Address: </label><br/><textarea className='textarea' rows={7} placeholder='address' style={{marginLeft:'10.5%'}} onChange={(e)=>setAdd(e.target.value)}></textarea><br/>
        <label className='label'>Password: </label><input type='password' placeholder='xxxxxxx' className='Title' style={{marginLeft:'-3%'}} onChange={(e)=>setPass(e.target.value)}/><br/>
        <center><button className='button' onClick={savedata}>Save</button></center>
      </Form>
      </CardBody>
      </Card>
    </div>
  );
}

export default EmployeeInput