import React from "react";
import MyButton from "./button/MyButton";

const TaskItem = (props) => {
	const task_im = !props.task.important ? "task" : "task important";
	return (
		<div className={task_im}>
			<div className="task_content">
				<p>
					{props.number}. {props.task.text}
				</p>
			</div>
			<div className="task_btns">
				<MyButton
					style={{ color: props.task.important ? "white" : "darkorange" }}
					onClick={() => props.remove(props.task)}
				>
					Remove
				</MyButton>
			</div>
		</div>
	);
};

export default TaskItem;
