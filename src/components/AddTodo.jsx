import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import { useState } from 'react';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex gap-2 items-center bg-gray-100 shadow-md rounded-lg p-4  "
    >
      <input
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></input>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Add task
      </button>
    </form>
  );
};

export default AddTodo;
