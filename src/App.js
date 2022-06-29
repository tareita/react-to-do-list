import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  let counter = 0;

  function handleChange(e) {
    const inputText = e.target.value;
    setText(inputText);
  }

  function handleAdd() {
    const task = { text: text, id: counter, editing: false };
    counter++;
    setText("");
    setTasks([...tasks, task]);
  }

  function handleDelete(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <div className="App">
      <h1 class="title"> To do list </h1>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.text}
            <button onClick={() => handleDelete(task.id)}> X </button>
          </li>
        ))}
      </ul>

      <div>
        <div> Add to list: </div>
        <input type="text" onChange={handleChange} value={text} />
        <button onClick={handleAdd}> Add </button>
      </div>
    </div>
  );
}

export default App;
