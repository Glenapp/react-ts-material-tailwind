import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Login } from './views/public-views/';

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <Login />
    </>
  );
}

export default App;
