import React, { useCallback, useState } from 'react'
import { Card, CardBody } from "shards-react";
import PageTitle from "../../components/common/PageTitle"
import { Container, Row, Col,Button,ButtonGroup } from "shards-react"
import './ManageTests.css'
import TestsData  from './services/testsData';
import EditTestForm from './services/EditTestForm';



function ManageTests() {
  
const testsData =  TestsData.getTestsData()
const [tests,setTests]= useState(testsData)
const [editingTestId, setEditingTestId] = useState(null);

const handleEditClick = (id) => {
  setEditingTestId(id);
};

const handleEditSubmit = async (id, updatedTestData) => {
  const updatedTests = await TestsData.editTestData(id, updatedTestData);
  setTests(updatedTests);
  setEditingTestId(null);
};

  let data=tests.map((test,index)=>(
    <tr key={test.id}>
        <td>{index+1}</td>
        <td>{test.title}</td>
        <td>{test.desc}</td>
        <td>{test.price}</td>
        <td><ButtonGroup size="sm">

               <Button outline pill theme="danger" onClick={()=>onDelete(test.id)} active=''>
                 <span className="text-danger" >
                   <i className="material-icons">delete_forever</i>
                 </span>{" "}
                 Delete
               </Button>

               <Button outline pill theme="info" onClick={() => handleEditClick(test.id)}>
                 <span className="text-primary">
                   <i className="material-icons">more_vert</i>
                 </span>{" "}
                 Edit
               </Button>
             </ButtonGroup>
        </td>
    </tr>
  ));

  const onDelete= useCallback(async(id)=>{
    const testsData= await TestsData.deleteTestData(id)
    const data= [...tests]
    for(let i=0; i<data.length;i++){
      if(data[i].id==id){
        data.splice(i,1)
      }
  }
  alert("Test deleted successfully");
setTests(data)
  },[tests]);

  const handleLinkClick=(index,testId)=>{
    localStorage.setItem('testid',testId)
    window.location.href = `/edit-test/${index+1}`;
  }


  return (
    <div>
    <Container fluid className="main-content-container " >
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Manage Tests" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="12 " md="12" xs='12'>
        <Card large className="mb-3">
            <CardBody>
              <table>
              <tr>
                <th>S.No</th>
                <th>Test</th>
                <th>Description</th>
                <th>price</th>
                <th>Action</th>
              </tr>
                {data}
              </table>
          </CardBody>
          </Card>
          {
            editingTestId && (
              <EditTestForm
                test={tests.find((test) => test.id === editingTestId)}
                onSubmit={handleEditSubmit}
              />
            )
          }
      </Col>
    </Row>
    </Container>
    </div>
  )
}

export default ManageTests;
