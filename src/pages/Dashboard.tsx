import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreateTask from "../components/tasks/CreateTask";

// const selectTasks = state => state.agents.map(agent => agent.id)
const selectTodos = (state: any) => state.tasks;

const Dashboard = () => {
  const dispatch = useDispatch();

  const todos = useSelector(selectTodos);

  useEffect(() => {
    dispatch({ type: "tasks/getTasks" });
  }, []);
  return (
    <>
      <CreateTask />
      <div>
        <pre>{JSON.stringify(todos, null, 2)}</pre>
      </div>
    </>
  );
};

export default Dashboard;
