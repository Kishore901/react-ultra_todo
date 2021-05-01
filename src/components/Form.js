import nextId from 'react-id-generator';
const Form = ({ inputText, setinputText, todos, setTodos, setStatus }) => {
  const todoId = nextId();
  const inputHandler = (e) => {
    setinputText(e.target.value);
  };
  const addHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, { text: inputText, completed: false, id: todoId }]);
    setinputText('');
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <form>
      <input value={inputText} onChange={inputHandler} type="text" />
      <button onClick={addHandler}>Add</button>
      <div className="select">
        <select onClick={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
