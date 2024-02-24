// SignUpPage.js
import  { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate=useNavigate();
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleSubmit = () => {
   
    navigate("/login");
  };
  const handleLogin = () => {
   
    navigate("/login");
  };

  return (
    <div style={{ overflow: 'hidden' }}>
        <div style={{ backgroundColor: '#ffffff', paddingTop: '10px', paddingBottom: '10px', borderRadius: '10px', boxShadow: '0px 0px 10px 0px rgba(0, 0, 0,0.8)', width: '380px', marginTop: '30px', marginBottom: '50px',marginLeft:'450px' }}>
          <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
              Sign Up
            </Typography>
            <div>
              {/* name */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0cm' }}> {/* Adjust marginBottom here */}
                <div style={{ marginRight: '15px' }}>
                  <AccountCircleIcon />
                </div>
                <TextField
                  label="Name"
                  type="name"
                  fullWidth
                  margin="normal"
                  value={name}
                  onChange={handleNameChange}
                />
              </div>

              {/* email */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0cm' }}> {/* Adjust marginBottom here */}
                <div style={{ marginRight: '15px' }}>
                  <EmailIcon />
                </div>
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  margin="normal"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              {/* password */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0cm' }}> {/* Adjust marginBottom here */}
                <div style={{ marginRight: '15px' }}>
                  <LockOpenIcon />
                </div>
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>

              {/* confirmPassword */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0cm' }}> {/* Adjust marginBottom here */}
                <div style={{ marginRight: '15px' }}>
                  <LockPersonIcon />
                </div>
                <TextField
                  label="Confirm Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
              </div>

              {/* mobileNumber */}
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.2cm' }}> {/* Adjust marginBottom here */}
                <div style={{ marginRight: '15px' }}>
                  <ContactPhoneIcon />
                </div>
                <TextField
                  label="Mobile Number"
                  fullWidth
                  margin="normal"
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                />
              </div>

              {/* Submit button */}
              <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ width: '35%' }}>
                Sign Up
              </Button>
            </div>
            <Typography variant="body1" align="center" style={{ marginTop: '10px' }}>
              Already have an account?{' '}
              <Button onClick={handleLogin}  color="primary">
                Login
              </Button>
            </Typography>
          </Container>
        </div>
      </div>
  );
};

export default SignUpPage;
