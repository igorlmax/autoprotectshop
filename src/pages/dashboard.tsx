import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// const selectTasks = state => state.agents.map(agent => agent.id)
const selectTodos = (state: any) => state.tasks;

const Dashboard = () => {
  const dispatch = useDispatch();

  const todos = useSelector(selectTodos);

  useEffect(() => {
    dispatch({ type: "todos/getTodos" });
  }, []);
  return (
    <div>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
};

export default Dashboard;
