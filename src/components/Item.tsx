import { useSearchParams } from "react-router-dom";
import { useTodos } from "../store/todos";

const Item = () => {
  const { todos, toggleTodosCompleted, handleTodoDelete } = useTodos();

  const [searchParams] = useSearchParams();

  let todosData = searchParams.get("todos");

  let filterData = todos;

  if (todosData === "active") {
    filterData = filterData.filter((todo) => !todo.completed);
  }

  if (todosData === "completed") {
    filterData = filterData.filter((todo) => todo.completed);
  }

  return (
    <>
      <ul className="input">
        {filterData.map((todo) => {
          return (
            <li
              key={todo.id}
              className="flex justify-between max-w-xl  mx-auto py-2 my-3 text-gray-400 border-b-2 border-t-2"
            >
              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleTodosCompleted(todo.id)}
              />
              <label>{todo.task}</label>
              {todo.completed && (
                <button
                  onClick={() => handleTodoDelete(todo.id)}
                  className="px-6 bg-red-500 ml-3 text-white"
                >
                  Delete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Item;
