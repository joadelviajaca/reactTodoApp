import { useState, useEffect } from 'react'
import './App.css'

const url = 'http://localhost:3000/todos';

function App() {

  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');
  const [loading, setLoading] = useState(true);
  const [add, setAdd] = useState(0);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(todos => {
        setTasks(todos);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false); // Desactivar el indicador de carga en caso de error
      })

  }, [add])

  const handleChange = (e) => {
    setTask(e.target.value);
  }

  const handleDelete = (index) => {
    console.log('first')
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({ name: task })
      })
        .then(response => response.json())
        .then(task => {
          setAdd(add + 1);
          // setTasks([...tasks, task]);
          setTask('');
        }
        )
        .catch(error => console.log(error))
    }
  }



  return (
    <>
      <form onSubmit={handleSubmit}>

        <input type='text' value={task} onChange={handleChange} />
        <button onClick={handleSubmit}>Add</button>

      </form>
      {
        loading ? (
          <p>Cargando...</p>
        ) :
          (

            <ul>
              {tasks.map((task) => (
                <li key={task.id}>{task.name}
                  <button type='button' onClick={() => handleDelete(task.id)}>X</button>
                </li>
              ))}
            </ul>
          )

      }
    </>
  )
}

export default App
