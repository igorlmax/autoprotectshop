export const StatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed',
}

/* state */
const initialState = {
  status: StatusFilters.All,
};


export default function tasksFilterReducer(
    state = initialState,
    action: any
) {
  switch (action.type) {
    case "tasks/filterByStatus": {
      return {
        ...state,
        status: action.payload
      };
    }
    default:
      return state;
  }
}
