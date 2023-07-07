import React, { useState } from "react";
import TaskList from "./components/TaskList";
import "./style/App.css";
import TaskAdd from "./components/TaskAdd";

function App() {
	const [tasks, setTasks] = useState([
		{ id: 1, text: "Anzhumania", important: true},
		{ id: 2, text: "Pres Kachat'", important: false },
		{ id: 3, text: "Begit", important: false },
	]);

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  const removeTask = (task) => {
    setTasks([...tasks].filter(t => t.id !== task.id))
  }

 	return (
		<div className="App">
			<h1 style={{ textAlign: "center" , marginTop: '15px'}}>ToDo List</h1>
      <TaskAdd create={createTask}/>
			<hr style={{ margin: "15px 0" }} />
			<TaskList tasks={tasks} remove={removeTask}/>
		</div>
	);
}

export default App;
