import NavBar from "./components/NavBar"
import HomePage from "./components/HomePage"
import taskReducer from "./reducers/taskReducer"
import { useReducer } from "react"
import TasksContext from "./context/TaskContext"
import loginReducer from "./reducers/loginReducer"
import LoginContext from "./context/LoginContext"

const App = () => {

  const [tasks, dispatch] = useReducer(taskReducer, [])
  const [user, userDispatch] = useReducer(loginReducer, '')


  return (
    <>
      <LoginContext.Provider value={{ user, userDispatch}}>
        <TasksContext.Provider value={{ tasks, dispatch }}>
          <NavBar />
          <HomePage />
        </TasksContext.Provider>
      </LoginContext.Provider>
    </>
  )
}

export default App
