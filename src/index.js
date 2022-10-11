import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Route, Routes, BrowserRouter as Router, Navigate, Link, Outlet, useParams, NavLink, useNavigate, useLocation  } from "react-router-dom"; /* import components for react router */ 
// import App from './App';
import reportWebVitals from './reportWebVitals';



//  CREATE COMPONENTS FOR ROUTING
// const Routing = (
  
// ) 


// APP FUMCTION

const App = () => {
  return(

    <div>
      <h1>
        hello world
      </h1>
    </div>
  )
  
}

const Learn = () => {
  return(
    <div>
      <h1>
        Learn
      </h1>

      {/* Link does not reload the entrie page just components */}
      <Link className="btn btn-success" to={"/learn/course"}>course </Link>  
      <Link className="btn btn-success" to={"/learn/bundle"}>bundle </Link>
      
      <Outlet/>
    </div>
  )
  
}

const Course = () => {
  const courseList = ["angular", "react", "vue", "nodejs"]
  const randomCourseName = courseList[Math.floor(Math.random() * courseList.length)]

  return( 
    <div>
      <h1>
        Course
      </h1>
      <p>All the course are listed here </p>
      <p>all test</p>
      <NavLink
      style={({isActive}) => {
        return{
          backgroundColor: isActive ? "pink" : "yellow" 
        }
        
      }}
       to={`/learn/course/${randomCourseName}`}>
      {randomCourseName}
      </NavLink>

      <NavLink  to={`/learn/course/text`}>
      text
      </NavLink>
      <Outlet/>
    </div>
  )
  
}

const Bundle = () => {
  return(

    <div>
      <h1>
        Bundle
      </h1>
      <p>All the bundle are listed here </p>
    </div>
  )
  
}

const CourseID = () => {
  const navigate = useNavigate()
  const {courseid} = useParams()
  return(
    <div>
      <h1>
       Url pharma is : {courseid}
      </h1>
      <button className="btn btn-success"
      onClick={() => {
        // navigate("/dashboard", {state: {courseid}}) //after passing information ic converted as string
        navigate("/dashboard", {state:"399"})
      }}
      >Price</button>

      {/* <link to ="/dashboard" state ={"nodejs"} >Testlink</link> */}
    </div>
  )
  
}


const DashBoard = () => {
  const location = useLocation()
  return(
    <div>
      <h1>
      Info about price :{location.state}
      </h1>
      
    </div>
  )
  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Router>
    <Routes>
    <Route path ="/" element={<App/>} />
    <Route path ="/learn" element={<Learn/>}>
       {/* going inside learn */}
      <Route path="course" element={< Course/>} >
          {/* going futher inside course */}
          {/* output will shown in course because course is parent child using outlet */}
         <Route path=":courseid" element={<CourseID/>} /> 
      </Route>
      <Route path="bundle" element={< Bundle/>} />
    </Route>
    <Route path="/dashboard" element={<DashBoard/>} />
    
{/* <Route path ="/myapps" element={<Navigate replace to ="/Learn" />} /> */}
    </Routes>
  </Router>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
