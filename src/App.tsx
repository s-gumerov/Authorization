import React, { useState, WheelEvent } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Header/NavBar/NavBar';
import { Footer } from './Footer/Footer';
import './style/App.css';
import { Main } from './Pages/Main/Main';
import { Category } from './Pages/Category/Category';
import { SignUp } from './Pages/Registration/SignUp';
import { SignIn } from './Pages/SignIn/SignIn';
import { INavBarMobileProps } from './Interfaces';



export const App: React.FC<INavBarMobileProps> = () => {
  const [touchMoveState, setTouchMoveState] = useState(false);
  const [touchStartValue, setTouchStartValue] = useState(0);
  const [showMobileNav, setShowMobileNav] = useState(true);

  const wheelHandler = (e: WheelEvent<HTMLDivElement>) => {
    e.nativeEvent.type === 'wheel' ? setShowMobileNav(true) : setShowMobileNav(false);
  };

  const touchMoveHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchMoveState(true);
  };

  const touchStartHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchMoveState(false);
    setTouchStartValue(e.changedTouches[0].screenY);
  };

  const touchEndHandler = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchMoveState === true) {
      touchStartValue < e.changedTouches[0].screenY ? setShowMobileNav(true) : setShowMobileNav(false);
    }
  };

  return (
    <div className="container"
      onWheel={wheelHandler}
      onTouchMove={touchMoveHandler}
      onTouchStart={touchStartHandler}
      onTouchEnd={touchEndHandler}
    >
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path="https://s-gumerov.github.io/" element={<Main />} />
          <Route path="https://s-gumerov.github.io/sign-up" element={<SignUp />} />
          <Route path="https://s-gumerov.github.io/cat" element={<Category />} />
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
