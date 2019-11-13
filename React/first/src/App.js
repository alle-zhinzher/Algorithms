import React from 'react';
import './App.scss';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Profile from './components/Profile';

const App = () => {
  return (
    <section className="app-wrapper">

      <Header />
      <NavBar />
      <Profile />
    </section>
  );
}

export default App;
