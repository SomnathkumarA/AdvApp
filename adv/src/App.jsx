import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/auth/Login';
import SignUpPage from './pages/auth/Signup';
import AboutUsPage from './pages/auth/About';
import ProfilePage from './pages/auth/Profile';
import HomePage from './pages/auth/Home';
import EventPage from './pages/auth/Event';
import ContactUs from './pages/auth/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/about" element={<AboutUsPage />} /> 
        <Route path="/profile" element={<ProfilePage />} /> 
        <Route path="/event" element={<EventPage />} /> 
        <Route path="/contact" element={<ContactUs />} /> 
        {/* <Route path="/admin" element={<AdminPage />} />  */}
      </Routes>
    </Router>
    
  );
}

export default App;
