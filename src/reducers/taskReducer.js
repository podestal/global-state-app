const taskReducer = (tasks, action) => {
    
    switch (action.type) {
        case 'ADD':
            return [action.task, ...tasks]
        case 'DELETE':
            return tasks.filter(task => task.id !== action.id)
        default:
            return tasks

    }
    // if (action.type === 'ADD') return [{id: Date.now(), title: 'Task' + Date.now()}, ...tasks]
    // if (action.type === 'DELETE') return tasks.filter(task => task.id)
}

// [
//     { id: Date.now(), title: 'Task ' + Date.now() },
//     ...tasks,
//   ]

export default taskReducer