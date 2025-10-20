import './App.css'
import HolaMundo from "./componets/HolaMundo";
import CambioFondo from "./componets/CambioFondo"
import Chechlist from './componets/Checklist';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState (0)
  return (
    <>
      <HolaMundo/>
      <Chechlist/>
      <CambioFondo />
      </>
      
  );
}

export default App
