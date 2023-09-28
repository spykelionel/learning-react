import { createSlice } from "@reduxjs/toolkit";

// const [todo, setTodo] = useState(initialState)
const initialState = [
  {
    id: 0,
    text: "first todo",
    completed: false,
  },
  {
    id: 1,
    text: "second todo",
    completed: false,
  },
  {
    id: 0,
    text: "third todo",
    completed: false,
  },
];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action) {
      const { payload } = action;
      state.push({
        id: payload.id,
        text: action.payload.text,
        completed: false,
      });
    },
    todoToggled(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.completed = !todo.completed;
    },
    editTodo(state, action){
      const todo = state.find((todo) => todo.id === action.payload);
      todo.text = action.payload.text
    }
  },
});

export const { todoAdded, todoToggled, editTodo } = todosSlice.actions;
export default todosSlice.reducer;
