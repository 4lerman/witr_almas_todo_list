import React, { useState } from "react";
import MyInput from "./input/MyInput";
import MyButton from "./button/MyButton";

const TaskAdd = ({ create }) => {
	const [task, setTask] = useState({ text: "", important: false, done: false });

	const addNewTask = (e) => {
		e.preventDefault();
		const newTask = {
			...task,
			id: Date.now(),
		};
		create(newTask);
		setTask({ text: "", important: false, done: false});
	};

	const setNewTaskImportant = (e) => {
		e.preventDefault();
        setTask({...task, important: task.important ? false: true})
	};

	return (
		<form>
			<MyInput
				value={task.text}
				onChange={(event) => setTask({ ...task, text: event.target.value })}
				type="text"
				placeholder="Task body"
			/>
			<MyButton
				onClick={setNewTaskImportant}
				style={{
					marginRight: "10px",
					backgroundColor: task.important ? "tomato" : "white",
				}}
			>
				!
			</MyButton>
			<MyButton onClick={addNewTask}> Add Task </MyButton>
		</form>
	);
};

export default TaskAdd;
