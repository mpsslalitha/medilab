import React from "react";
import { Navigate } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts/index";

// Route Views
import ADashboardOverview from "./views/Admin/AdminDashboard";
import AdminUserProfileLite from "./views/Admin/AdminUserProfileLite";
import AddNewTest from "./views/Admin/AddNewTest";
import Manageemployee from "./views/Admin/Manageemployee";
import Addemployee from "./views/Admin/Addemployee";
import ManageTests from "./views/Admin/ManageTests";
import employeeDashboard from "./views/Employee/EmployeeDashboard";
import UserProfileLite from "./views/Employee/ViewMedicalReport";
import AddNewApp from "./views/Employee/Employee-book-appointment";
//import ComponentsOverview from "./views/Employee/Emplyee-appointment-history";
import AppointmentHistory from "./views/Employee/Emplyee-appointment-history";
import Tables from "./views/Employee/Search";
import ViewTests from "./views/Employee/ViewTests";
import TestDetails from "./views/Employee/tests-in-detail";
import Editemployee from "./views/Admin/Editemployee";
import EditTestDetails from "./views/Admin/EditTests";
import StatusAction from "./views/Admin/services/StatusAction";
import UserAccountDetails from "./components/user-profile-lite/UserAccountDetails";
import UpdatePassword from "./views/Admin/UpdatePassword";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Navigate to="/login" />
  },
  {
    path: "/AdminDashboard",
    layout: DefaultLayout,
    component: ADashboardOverview
  },
  {
    path: "/admin-user-profile-lite",
    layout: DefaultLayout,
    component:AdminUserProfileLite
  },
  {
    path: "/add-new-test",
    layout: DefaultLayout,
    component: AddNewTest
  },
  {
    path: "/manage-employee",
    layout: DefaultLayout,
    component: Manageemployee
  },
  {
    path: "/add-employee",
    layout: DefaultLayout,
    component: Addemployee
  },
  {
    path: "/ManageTests",
    layout: DefaultLayout,
    component: ManageTests
  },
  {
    path: "/emp/:empid",
    layout: DefaultLayout,
    component:Editemployee
  },
  {
    path:'/edit-test/:testid',
    layout:DefaultLayout,
    component:EditTestDetails
  },
  {
    path: "/employee",
    exact: true,
    layout: DefaultLayout,
    component: () => <Navigate to="/employeeDashboard" />
  },
  {
    path: "/employeeDashboard",
    layout: DefaultLayout,
    component: employeeDashboard
  },
  {
    path: "/view-medical-reports",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/employee-book-appointment",
    layout: DefaultLayout,
    component: AddNewApp
  },
  {
    path: "/employee-appointment-history",
    layout: DefaultLayout,
    component: AppointmentHistory
  },
  {
    path: "/patient-list",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/viewTests",
    layout: DefaultLayout,
    component: ViewTests
  },
  {
    path: "/StatusActions",
    layout: DefaultLayout,
    component: StatusAction
  },
  {
    path:'/test/:testid',
    layout:DefaultLayout,
    component:TestDetails
  },
  {
    path: "/user-profile-lite",
    layout: DefaultLayout,
    component:UserAccountDetails
  },
  {
    path: "/UpdatePassword",
    layout: DefaultLayout,
    component:UpdatePassword
  },
  
];
