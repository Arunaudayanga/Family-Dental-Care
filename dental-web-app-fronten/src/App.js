import logo from './logo.svg';
import './App.css';
import EditProfile from './views/EditProfile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route path='/' element={<EditProfile/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
