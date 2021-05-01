import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodo.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            text={todo.text}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
