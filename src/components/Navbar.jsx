import { Link, useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchParams] = useSearchParams();

  let todosData = searchParams.get("todos");

  console.log(todosData);

  return (
    <nav className="flex justify-between max-w-xl mx-auto pt-5 mb-1 text-gray-400 border-b-2">
      <Link
        to="/"
        className={
          todosData === null
            ? " text-green-500 border-b-2 border-green-500 font-medium "
            : " hover:text-black hover:border-b-2 hover:border-black hover:font-medium"
        }
      >
        All{" "}
      </Link>
      <Link
        to="/?todos=active"
        className={
          todosData === "active"
            ? " text-green-500 border-b-2 border-green-500 font-medium "
            : " hover:text-black hover:border-b-2 hover:border-black hover:font-medium"
        }
      >
        Active
      </Link>
      <Link
        to="/?todos=completed"
        className={
          todosData === "completed"
            ? " text-green-500 border-b-2 border-green-500 font-medium "
            : " hover:text-black hover:border-b-2 hover:border-black hover:font-medium"
        }
      >
        Completed
      </Link>
    </nav>
  );
};

export default Navbar;
