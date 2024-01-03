import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Form validation
    if (!email || !password) {
      alert('Please fill out all fields.');
      return;
    }

    // Simulate login success
    const welcomeMsg = `Welcome, ${email}!`;
    setWelcomeMessage(welcomeMsg);
    setLoggedIn(true);

    // Log form data
    console.log({
      email,
      password,
      rememberMe,
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '300px', padding: '30px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px' }}>
        <CssBaseline />
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isLoggedIn ? 'Welcome back!' : 'Sign in'}
          </Typography>
          {!isLoggedIn && (
            <Box component="form" onSubmit={handleSubmit} noValidate style={{ marginTop: '10px' }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="rememberMe" color="primary" />}
                label="Remember me"
                name="rememberMe"
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <Link component={RouterLink} to="/Home" style={{ textDecoration: 'none' }}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{ marginTop: '20px', marginBottom: '10px' }}
                >
                  Sign In
                </Button>
              </Link>
              <Grid container>
                <Grid item>
                  <Link component={RouterLink} to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          )}
          {welcomeMessage && (
            <Typography variant="h6" color="text.secondary" align="center" style={{ marginTop: '20px' }}>
              {welcomeMessage}
            </Typography>
          )}
        </Box>
      </div>
    </div>
  );
};

export default LoginPage;
