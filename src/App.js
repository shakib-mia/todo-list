import { useEffect, useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

function App() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [addResult, setAddResult] = useState({});
  const [deletedCount, getDeletedCount] = useState(0);

  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, [addResult.acknowledged, deletedCount]);

  const completeItem = (projectTitle) => {
    alert(projectTitle);
  };

  const addTask = (e) => {
    e.preventDefault();

    const task = {
      title,
    };

    fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(task),
    })
      .then((response) => response.json())
      .then((data) => setAddResult(data));
  };

  return (
    <div className="grid lg:grid-cols-2 align-center" id="container">
      <AddTask addTask={addTask} setName={setTitle}></AddTask>

      <TodoList
        completeItem={completeItem}
        setDeletedCount={getDeletedCount}
        projects={projects}
      ></TodoList>
    </div>
  );
}

export default App;
