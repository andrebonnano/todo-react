import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { ITask } from './interfaces/ITask';

import styles from './css/App.module.css'
import Modal from './components/Modal';

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal')
    if (display) {
      modal!.classList.remove('hide')
    } else {
      modal!.classList.add('hide')
    }
  }

  const editTask = (task: ITask): void => {
    hideOrShowModal(true)
    setTaskToUpdate(task)
  }

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty }
    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    })
    setTaskList(updatedItems)
    hideOrShowModal(false)
  }

  return (
    <div>
      <Modal children={<TaskForm btnText='Editar tarefa' taskList={taskList} task={taskToUpdate} handleUpdate={updateTask} />} ></Modal>
      <Header></Header>
      <main className={styles.main}>
        <div>
          <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}></TaskForm>
        </div>
        <div>
          <h2>Suas Tarefas</h2>
          <TaskList taskList={taskList} handelDelete={deleteTask} handleEdit={editTask}></TaskList>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
