import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

import styles from './css/App.module.css'

function App() {
  return (
    <div>
      <Header></Header>
      <main className={styles.main}><h1>Conteúdo...</h1></main>
      <Footer></Footer>
    </div>
  );
}

export default App;
