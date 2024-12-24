import React from 'react';

function App() {
  return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
  );
}

export default App;

// src/App.js
import React from 'react';
import './App.css';
import CultureHeritage from './components/CultureHeritage'; // Import the new component

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to Penang</h1>
                <p>Explore the beautiful tourist attractions in Penang!</p>
            </header>

            {/* Other existing categories/components */}

            <CultureHeritage /> {/* Add the Culture Heritage section here */}

            {/* Other content */}
        </div>
    );
}

export default App;
