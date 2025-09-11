import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

<assets />;
const TodoItems = (probs) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
      onClick={() => {
          probs.toggle(id);
        }}
        className="flex items-center flex-1 cursor-pointer"
      >
        <img className="w-7" 
        src={probs.isComplete ? tick : not_tick}
         alt="" />
        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 
            
          ${probs.isComplete ? "line-through" : " "}
          `}
        >
          {probs.text}
        </p>
      </div>

      <img
        onClick={() => {
          probs.deleteTodo(probs.id);
        }}
        className="w-3.5 cursor-pointer"
        src={delete_icon}
        alt=""
      />
    </div>
  );
};

export default TodoItems;
