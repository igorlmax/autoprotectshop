import React from "react";
import { ITask } from "../../redux/reducer/tasksReducer";
import { useDispatch } from "react-redux";

type TaskListItemProps = {
  task: ITask;
};

const TaskListItem = ({ task }: TaskListItemProps): JSX.Element => {
  const dispatch = useDispatch();

  const { text, completed, color } = task;

  const handleCompletedChanged = () => {
    dispatch({ type: "task/toggled", payload: task.id });
  };

  return (
    <>
      <div>
        <div>{text}</div>
        <div>{color}</div>
        <div>{completed}</div>
        <input
          type="checkbox"
          onChange={handleCompletedChanged}
          checked={completed}
        />
      </div>
    </>
  );
};

export default TaskListItem;
