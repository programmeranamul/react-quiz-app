
import './styles/App.css';
import Welcome from './Welcome';
import React, { useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <Welcome />
  
    </>
  );
}

export default App;
