import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <>
      <AddTodo />
      <Todos />
      <br />
      <div className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl">Hello, Tailwind CSS!</h1>
      </div>
    </>
  );
}

export default App;
