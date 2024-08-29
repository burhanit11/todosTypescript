import AddToDo from "./components/AddToDo";
import Item from "./components/Item";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main>
      <h1 className="text-center mt-20 text-xl text-green-500 font-bold">
        Todo List React + Typescript
      </h1>
      <Navbar />
      <AddToDo />
      <Item />
    </main>
  );
};

export default App;
