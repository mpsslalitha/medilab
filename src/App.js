import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import routes from "./routes";
import PrivateRoots from "./layouts/privateRoots";
import "bootstrap/dist/css/bootstrap.min.css";
import "./shards-dashboard/styles/shards-dashboards.1.1.0.min.css";
import Login from "./components/components-overview/login";
import { DefaultLayout } from "./layouts";
import TestDetails from "./views/Employee/tests-in-detail";
import Editemployee from "./views/Admin/Editemployee";
import EditTestDetails from "./views/Admin/EditTests";

export default ()=> {
  //debugger


  return(

  <Router basename={process.env.REACT_APP_BASENAME || ""}>

    <Routes>
   <Route path='/login' element={<Login/> } />

    <Route path='/test/:testid' element={<DefaultLayout><TestDetails/></DefaultLayout>}/>
    <Route path='/emp/:empid' element={<DefaultLayout><Editemployee/></DefaultLayout>}/>
    <Route path='/edit-test/:testid' element={<DefaultLayout><EditTestDetails/></DefaultLayout>}/>

      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            element={
              <PrivateRoots >
                <route.layout {...route}>
                  <route.component {...route} />
                </route.layout>
                </PrivateRoots>
            }
          />
        );
      })}

      <Route index element={<Login />} />

    </Routes>
  </Router>
)};
