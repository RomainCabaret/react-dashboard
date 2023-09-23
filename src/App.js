import React from "react";
import DashboardEmployees from "./Pages/DashboardEmployees/DashboardEmployees";
import DashboardFinance from "./Pages/DashboardFinance/DashboardFinance";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SideBar from "./Components/Sidebar/SideBar";
import {DashboardContextProvider} from './context/DashboardContext'
import "./App.css";

export default function App() {
  return (
    <DashboardContextProvider>

      <BrowserRouter>

        <SideBar/>
      <Routes>

        <Route path="/" exact Component={DashboardFinance}/>
        <Route path="/dashboardEmployees" exact Component={DashboardEmployees}/>


      </Routes>
      </BrowserRouter>
    </DashboardContextProvider>
  );
}
