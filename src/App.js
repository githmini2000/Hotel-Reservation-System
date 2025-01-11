// src/App.js
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Packages from "./pages/Packages";
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import BookingForm from './pages/BookingForm';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        
        <Routes> 
          <Route path="/" element={<Home />} /> 
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/signup" element={<SignUp />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/contact" element={<ContactUs />} />
          

        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
