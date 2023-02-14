import React from "react";
import { ITask } from "../../redux/reducer/tasksReducer";

type TaskListItemProps = {
  task: ITask;
};

const TaskListItem = ({ task }: TaskListItemProps): JSX.Element => {
  return (
    <>
      <div>
        <div>{task.text}</div>
        <div>{task.color}</div>
        <div>{task.completed}</div>
      </div>
    </>
  );
};

export default TaskListItem;
