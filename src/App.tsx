import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import './App.css';
import { UserAutorization } from './components/UserAutorization';

const App: React.FC = () => {

  return (
    <div className="container">
      <header>
        <NavBar />
      </header>
      <main>
        <UserAutorization />
      </main>
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;
