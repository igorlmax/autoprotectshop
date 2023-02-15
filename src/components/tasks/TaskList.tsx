import React from "react";
import TaskListItem from "./TaskListItem";
import { ITask } from "../../redux/reducer/tasksReducer";
import { useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";

const TaskList = () => {
  const tasks = useAppSelector((state: RootState) => state.tasksReducer);

  const renderListItems = tasks?.map((task: ITask) => {
    return <TaskListItem key={task.id} task={task} />;
  });

  return (
    <>
      <h2>Task List</h2>
      {renderListItems}
    </>
  );
};

export default TaskList;
