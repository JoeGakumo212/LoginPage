import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Container } from '@mui/material';

const HomePage: React.FC = () => {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('name');
  const age = new URLSearchParams(search).get('age');

  return (
    <Container>
      <Typography variant="h4">Welcome {name}!</Typography>
      <Typography variant="body1">Your age is {age}</Typography>
    </Container>
  );
};

export default HomePage;
