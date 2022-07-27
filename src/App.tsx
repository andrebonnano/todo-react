import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ITask } from './interfaces/ITask';

import styles from './css/App.module.css'

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  return (
    <div>
      <Header></Header>
      <main className={styles.main}>
        <div>
          <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}></TaskForm>
        </div>
        <div>
          <h2>Suas Tarefas</h2>
          <TaskList></TaskList>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
