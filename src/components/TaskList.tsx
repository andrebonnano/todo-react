import React from 'react'
import { ITask } from '../interfaces/ITask'
import styles from '../css/TaskList.module.css'

type Props = {
  taskList: ITask[]
  handelDelete(id:number):void
}

const TaskList = ({ taskList, handelDelete }: Props) => {
  return (
      <>
        {taskList.length > 0 ? (
          taskList.map((task) =>(
            <div key={task.id} className={styles.task}>
              <div className={styles.details}>
                <h4>{task.title}</h4>
                <p>Dificuldade: {task.difficulty}</p>
              </div>
              <div className={styles.actions}>
                <i className="bi bi-pencil"></i>
                <i className="bi bi-trash" onClick={() => {handelDelete(task.id)}}></i>
              </div>
            </div>
          ))
        ) : (
          <p>Não há tarefas cadastradas!</p>
        )}
      </>
  )
}

export default TaskList