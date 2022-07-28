import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ITask } from './interfaces/ITask';

import styles from './css/App.module.css'

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])

  const deleteTask = (id: number) =>{ 
    setTaskList(
      taskList.filter(task=>{
        return task.id !== id
      })
    )
  }

  return (
    <div>
      <Header></Header>
      <main className={styles.main}>
        <div>
          <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}></TaskForm>
        </div>
        <div>
          <h2>Suas Tarefas</h2>
          <TaskList taskList={taskList} handelDelete={deleteTask}></TaskList>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
