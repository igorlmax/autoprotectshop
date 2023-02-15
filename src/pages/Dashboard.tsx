import React, { useEffect } from "react";
import CreateTask from "../components/tasks/CreateTask";
import TaskList from "../components/tasks/TaskList";
import { useDispatch } from "react-redux";
import FilterSection from "../components/tasks/FilterSection";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "tasks/getTasks" });
  }, []);

  return (
    <>
      <CreateTask />
      <FilterSection />
      <TaskList />
    </>
  );
};

export default Dashboard;
