import { useState } from 'react'
import './App.css'

function App() {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  const handleDelete = (index) => {
    console.log('first')
    const newTasks = [...tasks];
    newTasks.splice(index,1);
    setTasks(newTasks);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <input type='text' value={task} onChange={handleChange} />
        <button onClick={handleSubmit}>Add</button>

      </form>
      <ul>
        { tasks.map((task,index) => (
          <li key={index}>{task}
            <button type='button' onClick={()=>handleDelete(index)}>X</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
