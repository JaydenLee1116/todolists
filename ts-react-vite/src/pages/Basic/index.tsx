import { useState } from 'react';

type Todo = {
  text: string;
  isDone: boolean;
};

function Basic() {
  const [newTodo, setNewTodo] = useState<Todo>({ text: '', isDone: false });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo({
      text: e.target.value,
      isDone: false,
    });
  };
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div className="flex flex-col items-center">
      <header className="m-0 w-full text-center text-6xl font-bold leading-[80px] text-jayden-0">
        <h1>Todolist TS + React + Vite</h1>
      </header>
      <main className="flex flex-col justify-center">
        <div className="flex justify-center">
          <input className="border" value={newTodo.text} onChange={handleInputChange} />
          <button
            className="rounded bg-jayden-0 px-4 py-2 font-bold text-white hover:bg-yellow-700"
            onClick={() => {
              setTodos([...todos, newTodo]);
              setNewTodo({
                text: '',
                isDone: false,
              });
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
                  <span className={todo.isDone ? 'line-through' : ''}>{todo.text}</span>
                  <button
                    className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
                    onClick={() => {
                      setTodos(
                        todos.map((t, i) => {
                          if (i === index) {
                            return { ...t, isDone: !t.isDone };
                          }
                          return t;
                        }),
                      );
                    }}
                  >
                    {todo.isDone ? 'Undo' : 'Done'}
                  </button>
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
