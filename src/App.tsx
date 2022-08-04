import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const createTodo = (title: string): Todo => {
  return {
    id: uuidv4(),
    title,
    completed: false,
  };
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');

  const onSubmitHandler: React. FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const todo = createTodo(title);
    setTodos([...todos, todo]);
    setTitle('');
  };



  return (
  <div>
    <h1>簡易Todoアプリ</h1>
    <div>
      <form onSubmit={onSubmitHandler} method="post" >
      <label>
        タイトル：
        <input 
         type="text" 
         value={title} 
         onChange={(event) => {
          setTitle(event.target.value);
          
        }} 
        />
        </label>
      <input type="submit" value="作成" />
      </form>
    </div>

    <hr />

    <table border={1}>
      <thead>
        <tr>
          <th>id</th>
          <th>タイトル</th>
          <th>進捗</th>
        </tr>
      </thead>

      <tbody>
        {todos.map((todo) => {
          return (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>
                <input
                 type="checkbox" 
                 name="" 
                 id="" 
                 checked={todo.completed}
                 onChange={(event) => {
                  const newTodos = todos.map(_todo => {
                    if(_todo.id === todo.id) {
                      return {
                        ...todo,
                        completed: !todo.completed,
                      };
                    }

                    return _todo;
                  });

                  setTodos(newTodos);
                 }}
                 />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
  );
};

  export default App;
