import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatusFilters } from "../../redux/reducer/tasksFilterReducer";
import { useAppSelector } from '../../redux/hook';
import { RootState } from '../../redux/store';

/**
 * Renders dynamically the buttons for filter Status "all", "active", "completed"
 * @param status
 * @param onChange
 * @constructor
 */
// @ts-ignore
const FilterStatus = ({ value: status, onChange }) => {
  const renderFilters = Object.keys(StatusFilters).map((key: string) => {
    // @ts-ignore
    const value = StatusFilters[key];
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

  return (
      <div>
        <h5>Filter by Status</h5>
        <ul>{renderFilters}</ul>
      </div>
  )
};

const FilterSection = () => {
  const dispatch = useDispatch();
  const { status } = useAppSelector((state: RootState) => state.taskFilterReducer);

  const onStatusChange = (status: string) =>
    dispatch({ type: "tasks/filterByStatus", payload: status });

  return (
    <>
      <FilterStatus value={status} onChange={onStatusChange} />
    </>
  );
};

export default FilterSection;
