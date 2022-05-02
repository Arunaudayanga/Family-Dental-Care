import logo from './logo.svg';
import './App.css';

import EditProfile from './views/Editprofile/EditProfile';
import AddDoctor from './views/AddDoctor/AddDoctor';
import DoctorSignin from './views/DoctorSignin/DoctorSignin';
//import Admin from "../views/adminPanel/adminPanel";

//import EditProfile from './views/EditProfile';
import Appointment from './views/Appointment/Appointment';
import AddAppointment from './views/Appointment/AddAppointment';
import EditAppointment from './views/Appointment/EditAppointment';
import AdminPanel from "./views/AdminPanel/AdminPanel";
import Home from "./views/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/AdminPanel' element={<AdminPanel/>} />
          </Routes>
        <Routes>
            <Route path='/Home' element={<Home/>} />
          </Routes>
        <Routes>
            <Route path='/' element={<EditProfile/>} />
          </Routes>
          <Routes>

            <Route path='/adddoctor' element={<AddDoctor/>} />
          </Routes>
          <Routes>
            <Route path='/DoctorSignin' element={<DoctorSignin/>} />
          </Routes>
         
          <Routes>
            <Route path='/Appointment' element={<Appointment/>} />
          </Routes>
          <Routes>
            <Route path='/AddAppointment' element={<AddAppointment/>} />
          </Routes>
          <Routes>
            <Route path='/EditAppointment/:id' element={<EditAppointment/>} />
          </Routes>
          

      </Router>


      
        
    </div>
  );
}

export default App;
