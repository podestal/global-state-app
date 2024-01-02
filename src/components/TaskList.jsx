import React, {useContext, useReducer} from 'react'
import taskReducer from '../reducers/taskReducer';
import TasksContext from '../context/TaskContext';

const TaskList = () => {

    const {tasks, dispatch} = useContext(TasksContext)

    return (
      <>
        <button
          onClick={() => dispatch({ type: 'ADD', task: {id: Date.now(), title: 'Task' + Date.now()}})}
          className="btn btn-primary my-3"
        >
          Add Task
        </button>
        <ul className="list-group">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span className="flex-grow-1">{task.title}</span>
              <button
                className="btn btn-outline-danger"
                onClick={() =>
                //   setTasks(tasks.filter((t) => t.id !== task.id))
                    dispatch({type: 'DELETE', id: task.id})
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </>
    );
}

export default TaskList