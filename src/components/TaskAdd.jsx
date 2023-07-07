import React, { useState } from "react";
import MyInput from "./input/MyInput";
import MyButton from "./button/MyButton";

const TaskAdd = ({ create }) => {
	const [task, setTask] = useState({text: ''});

	const addNewTask = (e) => {
		e.preventDefault();
        const newTask = {
            ...task, id: Date.now()
        }
        create(newTask);
        setTask({text: ''});
	};
	return (
		<form>
			<MyInput
				value={task.text}
				onChange={(event) => setTask({...task, text: event.target.value})}
				type="text"
				placeholder="Task body"
			/>
			<MyButton onClick={addNewTask}> Add Task </MyButton>
		</form>
	);
};

export default TaskAdd;
