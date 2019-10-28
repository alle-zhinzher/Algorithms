import React from 'react';
import './App.css';

const App = () => {
  return (
    <section className="app-wrapper">
      <header className="header">
        <img src="https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/ma5.png"></img>
        <nav className="nav">
          <span>Profile</span>
          <span>Messages</span>
          <span>Main Content</span>
        </nav>
      </header>
      
      <aside className="aside"></aside>
      <main className="content"></main>
    </section>
  );
}

export default App;
