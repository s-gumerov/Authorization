import React from 'react';
import {
  Routes,
  Route
}
  from 'react-router-dom';
import { NavBar } from './Header/NavBar';
import { Footer } from './Footer/Footer';
import './style/App.css';
import { SignUp } from './Pages/Registration/SignUp';
import { SignIn } from './Pages/SignIn/SignIn';

const App: React.FC = () => {

  return (
    <div className="container">
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
