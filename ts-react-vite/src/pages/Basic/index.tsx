import { useState } from 'react';
import { Link } from 'react-router-dom';

function Basic() {
  const [newTodo, setNewTodo] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const [todos, setTodos] = useState<string[]>([]);
  return (
    <div className="flex flex-col content-center">
      <header className="m-0 w-full text-center text-6xl font-bold leading-[80px] text-jayden-0">
        <h1>Todolist TS + React + Vite</h1>
      </header>
      <main className="flex flex-col justify-center">
        <div className="flex justify-center">
          <input className="border" value={newTodo} onChange={handleInputChange} />
          <button
            className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
            onClick={() => {
              setTodos([...todos, newTodo]);
              setNewTodo('');
            }}
          >
            Add Todo
          </button>
        </div>
        <div className="flex justify-center">
          <ul>
            {todos.map((todo, index) => (
              <div className="flex">
                <li key={index}>
                  <span>{todo}</span>
                  <button
                    className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                    onClick={() => {
                      setTodos(todos.filter((_, i) => i !== index));
                    }}
                  >
                    Delete
                  </button>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Basic;
