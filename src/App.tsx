import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Header/NavBar/NavBar';
import { Footer } from './Footer/Footer';
import './style/App.css';
import { Main } from './Pages/Main/Main';
import { Category } from './Pages/Category/Category';
import { SignUp } from './Pages/Registration/SignUp';
import { SignIn } from './Pages/SignIn/SignIn';

export const App: React.FC = () => {

  return (
    <div className="container">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cat" element={<Category />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
