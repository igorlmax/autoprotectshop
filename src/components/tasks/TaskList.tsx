import React from "react";
import { useSelector } from "react-redux";
import TaskListItem from "./TaskListItem";
import { ITask } from "../../redux/reducer/tasksReducer";

const TaskList = () => {
  const tasks: ITask[] = useSelector((state: any) => state.tasks);

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
