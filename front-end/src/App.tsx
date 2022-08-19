import React from 'react';
import { Container } from '@mui/material';
import LogicGameGrid from './components/LogicGameGrid';
import './App.css';

function App() {
  return <Container maxWidth="sm">
    <h1>2048 Game</h1>
    <LogicGameGrid width={4} height={4} />
  </Container>
}

export default App;
