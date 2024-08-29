import { FormEvent, useState } from "react";
import { useTodos } from "../store/todos";

const AddToDo = () => {
  const [todo, setTodo] = useState("");

  const { handelAddTodo } = useTodos();

  const handelInputData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handelAddTodo(todo);
    setTodo("");
  };

  return (
    <form
      onSubmit={handelInputData}
      className="flex justify-between max-w-xl mx-auto pt-5 mb-1 text-gray-400 "
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="flex w-full  border border-gray-300 bg-transparent  px-3 text-sm placeholder:text-gray-400 outline-none ring-1 ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
      />{" "}
      <button type="submit" className="px-6 bg-green-500 ml-3 text-white">
        Add
      </button>
    </form>
  );
};

export default AddToDo;
