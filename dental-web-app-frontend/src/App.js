import logo from './logo.svg';
import './App.css';
import EditProfile from './views/Editprofile/EditProfile';
import AddDoctor from './views/AddDoctor/AddDoctor';
import DoctorSignin from './views/DoctorSignin/DoctorSignin';
<<<<<<< Updated upstream

//import AdminPanel from "./views/AdminPanel/adminPanel";

import AdminPanel from './views/AdminPanel/AdminPanel';
import AdminSignin from './views/AdminSignin/AdminSignin';
import Payment from './views/Payment/Payment';
import AddPayment from './views/Payment/AddPayment';
import EditPayment from './views/Payment/EditPayment';
import Admin from "./views/AdminPanel/AdminPanel";

=======
import Admin from "./views/AdminPanel/AdminPanel";
import AdminPanel from './views/AdminPanel/AdminPanel';
>>>>>>> Stashed changes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorProfile from './views/DoctorProfile/DoctorProfile';
import Appointment from './views/Appointment/Appointment';
import AddAppointment from './views/Appointment/AddAppointment';
import EditAppointment from './views/Appointment/EditAppointment';
import Home from './views/Home/Home';
 

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/editDoctor/:id' element={<EditProfile/>} />
          </Routes>
          <Routes>
            <Route path='/adddoctor' element={<AddDoctor/>} />
          </Routes>
          <Routes>
            <Route path='/' element={<DoctorSignin/>} />
          </Routes>
          <Routes>
            <Route path='/DoctorProfile/:id' element={<DoctorProfile/>} />
          </Routes>
<<<<<<< Updated upstream
         
          
          <Routes>
            <Route path='/AdminPanel' element={<AdminPanel/>} />
          </Routes>
          
         
          <Routes>
            <Route path='/AdminSignin' element={<AdminSignin/>} />
          </Routes>
          
          <Routes>
            <Route path='/Payment' element={<Payment/>} />
          </Routes>
         
          <Routes>
            <Route path='/AddPayment' element={<AddPayment/>} />
          </Routes>

          <Routes>
            <Route path='/EditPayment/:id' element={<EditPayment/>} />
          </Routes>
         
=======
          <Routes>
            <Route path='/Appointment' element={<Appointment/>} />
          </Routes>
          <Routes>
            <Route path='/AddAppointment' element={<AddAppointment/>} />
          </Routes>
          <Routes>
            <Route path='/EditAppointment/:id' element={<EditAppointment/>} />
          </Routes>
          <Routes>
            <Route path='/AdminPanel' element={<AdminPanel/>} />
          </Routes>
          <Routes>
            <Route path='/Home' element={<Home/>} />
          </Routes>
>>>>>>> Stashed changes
         
      </Router>


      
        
    </div>
  );
}

export default App;
