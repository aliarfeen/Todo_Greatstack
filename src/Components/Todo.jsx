import { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const Todo = () => {
// todo-list logic
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
          //ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          //onClick={add}
          className="bg-orange-600 h-16 w-32 border-none rounded-full text-white text-lg font-medium cursor-pointer"
        >
          Add
        </button>
      </div>

      {/*------------todo list rendaring-------------*/}
      <div>
       
      </div>
    </div>
  );
};

export default Todo;
