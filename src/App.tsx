import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './containers/NavBar';
import './App.css';
import { UserAutorization } from './containers/UserAutorization';

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
