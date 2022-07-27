import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';

import styles from './css/App.module.css'

function App() {
  return (
    <div>
      <Header></Header>
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <p>Formulário</p>
        </div>
        <div>
          <h2>Suas Tarefas</h2>
          <p>lista</p>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
