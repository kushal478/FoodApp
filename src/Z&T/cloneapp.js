import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './root/layout/components/navbar/Navbar';
import {BrowserRouter as Router , Switch , Route } from "react-router-dom";
import Home from "./root/layout/components/home/Home";
import EmployeeList from "./employees/components/EmployeeList"
//import StockList from  "./stocks/components/";
import About from "./root/layout/components/about/About";
import EmployeeDetails from "./employees/components/EmployeeDetails";

class App extends React.Component
{
   constructor(props){
       super(props);
 
   }      


  render()
  {
    return(
        <React.Fragment>
          <Router>
            <Navbar/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/employees" component={EmployeeList}/>
              <Route exact path="/employees/:emp_id" component={EmployeeDetails}/>
              <Route exact path="/employees" component={EmployeeList}/>
              {/* <Route exact path="/stocks" component={StockList}/> */}
              <Route exact path="/about" component={About}/>

            </Switch>
          </Router>               
        
        </React.Fragment>

    
    )
  }
}

 

export default App;
 