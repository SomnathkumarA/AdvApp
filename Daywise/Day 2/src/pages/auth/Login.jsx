import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Link, Select, MenuItem, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('user');
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Temporary data for admin and user
    const adminData = { email: 'admin@g.com', password: 'admin' };
    const userData = { email: 'user@g.com', password: 'user' };

    // Check user type and credentials
    if (userType === 'admin' && email === adminData.email && password === adminData.password) {
      navigate('/admin');
    } else if (userType === 'user' && email === userData.email && password === userData.password) {
      navigate('/home');
    } else {
      // Invalid credentials
      alert('Invalid email or password');
    }
  };

  const handleSignup = () => {
    navigate('/');
  };

  return (
    <div style={{ marginTop: '100px', marginBottom: '160px', marginLeft: '467px', marginRight: '467px', align: 'center', backgroundColor: '#ffffff', paddingTop: '0px', paddingBottom: '0px', borderRadius: '10px', boxShadow: '0px 0px 10px 0px rgba(0, 0, 0,1)', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
      <Container maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          LOGIN
        </Typography>
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <TextField
            label="Password"
            type={showPassword ? 'text' : 'password'}
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <br />
          <Select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            fullWidth
            margin="normal"
            style={{ marginBottom: '20px' }}
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
          <br />
          <center>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!email || !password}
              style={{ marginTop: '20px', width: '80px' }}
            >
              Login
            </Button>
          </center>
        </form>
        <Typography variant="body1" align="center" style={{ marginTop: '10px' }}>
          Do not have an account?{' '}
          <Link to="/">
            <Button onClick={handleSignup}>Sign Up</Button>
          </Link>
        </Typography>
      </Container>
    </div>
  );
};

export default LoginPage;
