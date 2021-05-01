import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setinputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodo, setfilteredTodo] = useState([]);
  useEffect(() => {
    filterHandler();
  }, [status, todos]);
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setfilteredTodo(todos.filter((item) => item.completed === true));
        break;
      case 'uncompleted':
        setfilteredTodo(todos.filter((item) => item.completed === false));
        break;
      default:
        setfilteredTodo(todos);
        break;
    }
  };

  return (
    <div className="App">
      <Header />
      <Form
        inputText={inputText}
        setinputText={setinputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <TodoList filteredTodo={filteredTodo} todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
