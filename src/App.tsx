import React from 'react';
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Logo } from './components/Logo/Logo';

function App() {
  return (
    <div className="{styles.app}">
      <Logo />
      <main className='{styles.content' />
      <Footer />
    </div>
  );
}

export default App;
