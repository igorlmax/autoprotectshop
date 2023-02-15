import React from "react";
import TaskListItem from "./TaskListItem";
import { ITask } from "../../redux/reducer/tasksReducer";
import { useAppSelector } from "../../redux/hook";

const TaskList = () => {
  const tasks: ITask[] = useAppSelector((state: any) => state.tasks);

  const renderListItems = tasks.map((task: ITask) => {
    return <TaskListItem key={task.id} task={task} />;
  });

  console.log("output: ", tasks);
  return (
    <>
      <h2>Task List</h2>
      {renderListItems}
    </>
  );
};

export default TaskList;
