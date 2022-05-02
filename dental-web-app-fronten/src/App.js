import logo from './logo.svg';
import './App.css';
import EditProfile from './views/Editprofile/EditProfile';
import AddDoctor from './views/AddDoctor/AddDoctor';
import DoctorSignin from './views/DoctorSignin/DoctorSignin';
import AdminPanel from './views/AdminPanel/AdminPanel';
import Home from './views/Home/Home';
import Feedback from './views/Feedback/Feedback';
import AddFeedback from './views/Feedback/AddFeedback';
import EditFeedback from './views/Feedback/EditFeedback';
//import Admin from "../views/adminPanel/adminPanel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
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

            <Route path='/AdminPanel' element={<AdminPanel/>} />

          </Routes>

          <Routes>

             <Route path='/Home' element={<Home/>} />

          </Routes>

         <Routes>

            <Route path='/Feedback' element={<Feedback/>} />

          </Routes>

         

          <Routes>

            <Route path='/AddFeedback' element={<AddFeedback/>} />

          </Routes>



          <Routes>

            <Route path='/EditFeedback/:id' element={<EditFeedback/>} />

          </Routes>
         
      </Router>


      
        
    </div>
  );
}

export default App;
