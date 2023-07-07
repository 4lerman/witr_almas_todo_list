import React from "react";
import TaskItem from "./TaskItem";

const List = ({ tasks, remove }) => {
	return (
		<div>
			{tasks.map((task, index) => (
				<TaskItem
					number={index + 1}
					task={task}
					key={task.id}
					remove={remove}
				/>
			))}
		</div>
	);
};

export default List;
