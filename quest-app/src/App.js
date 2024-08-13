import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar/Navbar';
import Home from './components/Home/Home';
import User from './components/User/User';
import Auth from './components/Auth/Auth';

function App() {
  // The App component is the main component of the application. It is the parent component of all other components.
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:userId" element={<User />} />
          <Route path="/auth" Component={Auth} /><Route/>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
