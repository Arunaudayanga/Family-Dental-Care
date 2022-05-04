import logo from './logo.svg';
import './App.css';
import EditProfile from './views/Editprofile/EditProfile';
import AddDoctor from './views/AddDoctor/AddDoctor';
import DoctorSignin from './views/DoctorSignin/DoctorSignin';
import AdminPanel from "./views/AdminPanel/adminPanel";
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
          
         
      </Router>


      
        
    </div>
  );
}

export default App;
