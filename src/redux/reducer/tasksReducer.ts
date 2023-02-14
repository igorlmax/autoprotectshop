const initialState = [
  { id: 0, text: "Learn React", completed: true },
  { id: 1, text: "Learn Redux", completed: false, color: "purple" },
  { id: 2, text: "Build something fun!", completed: false, color: "blue" },
];

export default function tasksReducer(
  state = initialState,
  action: { type: any; payload: any }
) {
  switch (action.type) {
    case "todos/getTodos": {
      return {
        ...state,
      };
    }
    case "todos/addTodo": {
      return [
              ...state,
              {
                  id: 10,
                  text: action.payload,
                  completed: false
              }
      ]
    }
    default:
      return state;
  }
}
