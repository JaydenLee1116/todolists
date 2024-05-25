import { useEffect, useState } from 'react';

type Todo = {
  id: number;
  text: string;
  isDone: boolean;
};

type TodoWithoutId = Omit<Todo, 'id'>;

const SERVER_URL = 'http://localhost:3000/todos';

function JsonServer() {
  const [newTodo, setNewTodo] = useState<TodoWithoutId>({
    text: '',
    isDone: false,
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo({
      text: e.target.value,
      isDone: false,
    });
  };
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch(SERVER_URL)
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);
  return (
    <div className="flex flex-col content-center">
      <header className="m-0 w-full text-center text-6xl font-bold leading-[80px] text-jayden-0">
        <h1>Todolist TS + React + Vite</h1>
      </header>
      <main className="flex flex-col justify-center">
        <div className="flex justify-center">
          <input className="border" value={newTodo?.text} onChange={handleInputChange} />
          <button
            className="rounded bg-jayden-0 px-4 py-2 font-bold text-white hover:bg-yellow-700"
            onClick={() => {
              fetch(SERVER_URL, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(newTodo),
              })
                .then(res => res.json())
                .then(data => setTodos([...todos, data]));
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
            {todos.map(todo => (
              <div className="flex" key={todo.id}>
                <li>
                  <span className={todo.isDone ? 'line-through' : ''}>{todo.text}</span>
                  <button
                    className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
                    onClick={() => {
                      fetch(`${SERVER_URL}/${todo.id}`, {
                        method: 'PATCH',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ isDone: !todo.isDone }),
                      })
                        .then(res => res.json())
                        .then(data =>
                          setTodos(
                            todos.map(t => {
                              if (t.id === todo.id) {
                                return data;
                              }
                              return t;
                            }),
                          ),
                        );
                    }}
                  >
                    {todo.isDone ? 'Undo' : 'Done'}
                  </button>
                  <button
                    className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
                    onClick={() => {
                      fetch(`${SERVER_URL}/${todo.id}`, {
                        method: 'DELETE',
                      }).then(() => setTodos(todos.filter(t => t.id !== todo.id)));
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

export default JsonServer;
