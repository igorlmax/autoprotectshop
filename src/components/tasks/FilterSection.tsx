import React from "react";
import { useDispatch } from "react-redux";
import { StatusOptions } from "../../redux/reducer/tasksFilterReducer";
import { useAppSelector } from "../../redux/hook";
import { RootState } from "../../redux/store";
import { ITask } from "../../redux/reducer/tasksReducer";

/**
 * Renders dynamically the buttons for filter Status "all", "active", "completed"
 * @param status
 * @param onChange
 * @constructor
 */
// @ts-ignore
const FilterStatus = ({ value: status, onChange }) => {
  // ['All', 'Active', 'Completed']
  const renderFilters = Object.keys(StatusOptions).map((key: string) => {
    console.log("key: ", Object.keys(StatusOptions));
    // @ts-ignore
    const value = StatusOptions[key];
    console.log("value: ", value);
    const handleClick = () => onChange(value);
    const className = value === status ? "selected" : "";

    return (
      <li key={value}>
        <button className={className} onClick={handleClick}>
          {key}
        </button>
      </li>
    );
  });

  const tasks = useAppSelector((state: RootState) => state.tasksReducer);

  const numberOfTasksLeft = tasks.filter((task: ITask) => !task.completed)
    .length;

  return (
    <div>
      <h5>Filter by Status</h5>
      <h4>Tasks left: {numberOfTasksLeft}</h4>
      <ul>{renderFilters}</ul>
    </div>
  );
};
const FilterSection = () => {
  const dispatch = useDispatch();
  const onMarkCompletedClicked = () => dispatch({ type: "tasks/allCompleted" });
  const onClearCompletedClicked = () =>
    dispatch({ type: "tasks/onClearCompletedClicked" });

  const { status } = useAppSelector(
    (state: RootState) => state.taskFilterReducer
  );
  const onStatusChange = (status: string) =>
    dispatch({ type: "tasks/filterByStatus", payload: status });
  return (
    <>
      <FilterStatus value={status} onChange={onStatusChange} />
      <button onClick={onMarkCompletedClicked}>Mark all completed</button>
      <button onClick={onClearCompletedClicked}>Hide all completed</button>
    </>
  );
};

export default FilterSection;
