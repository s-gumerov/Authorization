import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './Header/NavBar';
import { Footer } from './Footer/Footer';
import './style/App.css';
import { Registration } from './Main/Registration/Registration';

const App: React.FC = () => {

  return (
    <div className="container">
      <header>
        <NavBar />
      </header>
      <main>
        <Registration />
      </main>
      <Footer />
    </div>
  );
}

export default App;
