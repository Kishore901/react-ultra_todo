const Todo = ({ todo, text, todos, setTodos }) => {
  const handleDelete = () => {
    setTodos(todos.filter((item) => todo.id !== item.id));
    let deletesound = new Audio('/delete.mp3');
    deletesound.play();
  };
  const handleStatus = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
    statusSound();
  };
  const statusSound = () => {
    let mark = new Audio('/mark.mp3');
    let unmark = new Audio('/unmark.mp3');
    if (todo.completed) {
      mark.play();
    } else {
      unmark.play();
    }
  };
  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`}>
      <li className="todo-item">{text}</li>
      <button onClick={handleStatus} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={handleDelete} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
