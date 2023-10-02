import React from 'react';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar'; // Import the Navbar component

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Include the Navbar component */}
      <Home />
      {/* Add additional components/routes here */}
    </div>
  );
}


export default App;
