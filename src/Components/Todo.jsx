import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";
import { data } from "autoprefixer";

const Todo = () => {
  // todo logic

  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  // useRef is used to get the text input
  // doc said: useRef is a React Hook that lets you reference a value that's not needed for rendering. const ref = useRef(initialValue).
  const inputRef = useRef();
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (!inputText) {
      alert("enter valid input");
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      data: Date().toLocaleString().split("GMT")[0],
      isComplete: false,
    };
    setTodoList((todoList) => [...todoList, newTodo]);
    inputRef.current.value = "";
  };

  //delete fun
  
  const deleteTodo = (id) => {
    setTodoList((prvTodos) => {
      return prvTodos.filter((todo) => todo.id !== id);
    });
  };

  //toggle fun
  const toggle = (id)=>{
    setTodoList(
      (prev) =>{
        return prev.map(
          (item)=>{
            if(item.id === id){
              return { ...item, isComplete: !item.isComplete }
            }
            return item;
          }
        )
      }
    )
  }
  //react doc said
  //useEffect is a React Hook that lets you synchronize a component with an external system. useEffect(setup, dependencies?) Reference.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  /// rendering TODO app
  return (
    <div
      className="bg-white place-self-center w-11/12 max-w-md min-h-[550px] flex
    flex-col p-7 rounded-xl"
    >
      {/*------------title-------------*/}
      <div className="flex items-center m-7 gap-2">
        <img src={todo_icon} alt="" className="w-8" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/*------------Input Box-------------*/}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="bg-orange-600 h-16 w-32 border-none rounded-full text-white text-xl font-semibold cursor-pointer"
        >
          Add
        </button>
      </div>

      {/*------------todo list rendaring-------------*/}
      <div>
        {todoList.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
