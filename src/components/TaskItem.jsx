import React, { useState } from "react";
import MyButton from "./button/MyButton";

const TaskItem = ({ task, number, remove }) => {
	const [isTaskDone, setTaskDone] = useState(task.done);
	let task_im = !task.important ? "task" : "task important";
	const task_done = !isTaskDone ? task_im : task_im + " done";

	const handleDoubleClick = () => {
		setTaskDone((prevTaskDone) => !prevTaskDone);
	};

	return (
		<div className={task_done} onDoubleClick={handleDoubleClick}>
			<div className="task_content">
				<p>
					{number}. {task.text}
				</p>
			</div>
			<div className="task_btns">
				<MyButton
					style={{ color: task.important ? "white" : "darkorange" }}
					onClick={() => remove(task)}
				>
					Remove
				</MyButton>
			</div>
		</div>
	);
};

export default TaskItem;
