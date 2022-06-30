import "./App.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  function handleChange(e) {
    const inputText = e.target.value;
    setText(inputText);
  }

  function handleAdd() {
    const task = { text: text, id: count, editing: false };
    setCount(count + 1);
    setText("");
    setTasks([...tasks, task]);
  }

  function handleDelete(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  function handleToggleEdit(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, editing: !task.editing };
      } else {
        return task;
      }
    });
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
            <button onclick={() => handleToggleEdit(task.id)}> edit </button>
            {task.editing && (
              <input type="text" label="Write your edited task here :D" />
            )}
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
