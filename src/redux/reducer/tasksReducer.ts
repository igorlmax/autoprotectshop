export interface ITask {
  id?: number;
  text?: string;
  completed?: boolean;
  color?: string;
}

const initialState: ITask[] = [
  { id: 0, text: "Learn React", completed: true },
  { id: 1, text: "Learn Redux", completed: false, color: "purple" },
  { id: 2, text: "Build something fun!", completed: false, color: "blue" },
];

function nextTaskId(task: any) {
  const maxId = task.reduce(
    (maxId: any, task: any) => Math.max(task.id, maxId),
    -1
  );
  return maxId + 1;
}

export default function tasksReducer(
  state: ITask[] = initialState,
  action: any
) {
  switch (action.type) {
    case "tasks/getTasks": {
      return state;
    }
    case "tasks/addTask": {
      return [
        ...state,
        {
          id: nextTaskId(state),
          text: action.payload,
          completed: false,
        },
      ];
    }
    case "tasks/allCompleted": {
      return state.map((task: ITask) => {
        return { ...task, completed: true }; // set property to true
      });
    }
    case "task/toggled": {
      return state.map((task: ITask) => {
        if (task.id !== action.payload) {
          return task; // display all todos
        }

        return {
          ...task,
          completed: !task.completed, // toggle the completed property
        };
      });
    }

    case "tasks/onClearCompletedClicked": {
      return state.filter((todo: ITask) => !todo.completed);
    }
    default:
      return state;
  }
}
