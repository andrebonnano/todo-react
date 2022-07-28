import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import styles from "../css/TaskForm.module.css"
import { ITask } from '../interfaces/ITask';

type Props = {
  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
  task?: ITask | null
  handleUpdate?(id:number, title:string, difficulty:number): void
}

const TaskForm = ({ btnText, taskList, setTaskList, task, handleUpdate }: Props) => {

  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("")
  const [difficulty, setDifficulty] = useState<number>(0)

  useEffect(() => {
    if (task) {
      setId(task.id)
      setTitle(task.title)
      setDifficulty(task.difficulty)
    }
  }, [task])

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (handleUpdate) {
      handleUpdate(id, title, difficulty)
    } else {
      const id = Math.floor(Math.random() * 1000)
      const newTask: ITask = { id, title, difficulty }
      setTaskList!([...taskList, newTask])
      setTitle("")
      setDifficulty(0)
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value)
    } else {
      setDifficulty(parseInt(e.target.value))
    }
  }

  return (
    <div className={styles.container}>
      <h2>O que você vai fazer?</h2>
      <form onSubmit={addTaskHandler}>
        <div>
          <label htmlFor="title">Título:</label>
          <input type='text' name='title' placeholder='Título da tarefa' onChange={handleChange} value={title} />
        </div>
        <div>
          <label htmlFor="difficulty">Dificuldade:</label>
          <input type='text' name='difficulty' placeholder='Dificuldade da tarefa' onChange={handleChange} value={difficulty} />
        </div>
        <div>
          <input type="submit" value={btnText} />
        </div>
      </form>
    </div>
  )
}

export default TaskForm