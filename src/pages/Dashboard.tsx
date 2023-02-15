import React from "react";
import CreateTask from "../components/tasks/CreateTask";
import TaskList from "../components/tasks/TaskList";
import FilterSection from "../components/tasks/FilterSection";

const Dashboard = () => {
  return (
    <>
      <CreateTask />
      <FilterSection />
      <TaskList />
    </>
  );
};

export default Dashboard;
