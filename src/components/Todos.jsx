import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../redux/todoSlice';

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const handleRemove = (id) => dispatch(removeTodo(id));
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">ToDo List</h1>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center bg-white p-4 rounded-md shadow-sm border border-gray-300"
          >
            {todo.text}{' '}
            <button
              onClick={() => handleRemove(todo.id)}
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
