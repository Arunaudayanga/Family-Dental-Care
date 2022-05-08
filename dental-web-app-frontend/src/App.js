import logo from './logo.svg';
import './App.css';
import EditProfile from './views/Editprofile/EditProfile';
import AddDoctor from './views/AddDoctor/AddDoctor';
import DoctorSignin from './views/DoctorSignin/DoctorSignin';

//import AdminPanel from "./views/AdminPanel/adminPanel";

import AdminPanel from './views/AdminPanel/AdminPanel';
import AdminSignin from './views/AdminSignin/AdminSignin';
import Payment from './views/Payment/Payment';
import AddPayment from './views/Payment/AddPayment';
import EditPayment from './views/Payment/EditPayment';
import Admin from "./views/AdminPanel/AdminPanel";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DoctorProfile from './views/DoctorProfile/DoctorProfile';

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
         
         
      </Router>


      
        
    </div>
  );
}

export default App;
