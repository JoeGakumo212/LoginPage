import React, { useState } from 'react';
import { TextField, Button, Typography, Container } from '@mui/material';
import axios from 'axios';

const LoginPage: React.FC = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const calculateAge = (dob: string): number => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const handleSubmit = async () => {
    const age = calculateAge(dob);
    if (age < 18 || age > 50) {
      setError('Age must be between 18 and 50.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/login', {
        name,
        password,
      });
      const { success, user } = response.data;
      if (success) {
        window.location.href = `/home?name=${user.name}&age=${age}`;
      } else {
        setError('Invalid login credentials');
      }
    } catch (error) {
      setError('Server error, please try again later');
    }
  };

  return (
    <Container>
      <Typography variant="h4">Login</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Date of Birth"
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        InputLabelProps={{ shrink: true }}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Login
      </Button>
    </Container>
  );
};

export default LoginPage;
