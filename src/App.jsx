import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  [tasks, setTasks] = useState([]);
  [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  return (
    <>
      <form>

        <input type='text' value={task} onChange={handleChange} />
        <button onClick={handleSubmit}>Add</button>

      </form>
      <ul>
        { tasks.map(todo => (
          <li key={todo}>{todo}
            <button onClick={handleDelete}>X</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
