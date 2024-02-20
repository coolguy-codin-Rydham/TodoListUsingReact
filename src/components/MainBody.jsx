import { useState,useRef} from "react";
import TaskH from "./TaskH";


const MainBody = () => {

  const inputRef = useRef(null);
  const [todoList, setTodoList] = useState([]);
  const [newTask, changeNewTask] = useState("");

  const handleChange = (event) => {
    changeNewTask(event.target.value);
  };
  const addTask = () =>{
    const task = {
        id : todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
        text: newTask,
        isCompleted: false
    }
    setTodoList([...todoList, task])
    inputRef.current.value=""
    changeNewTask("")
    
  }
  const deleteTask = (id)=>{
    setTodoList(todoList.filter((task)=>task.id!=id))
  }
  const completeTask = (id) => {
    setTodoList(
        todoList.map((task)=>{
            if(task.id==id){
                return {...task,isCompleted:true};
            }
            else{
                return task;
            }

        })
    )
  }
  return (
    <>
      <div className="flex items-center justify-center w-full h-32 bg-red-200 addTask">
        <input
          onChange={handleChange}
          className="px-3 py-2 text-xl font-bold bg-white border-2 border-slate-300"
          placeholder="Enter Your Task"
          type="text"
          ref={inputRef}
        />
        <button
          onClick={addTask}
          className="px-3 py-2 text-xl text-white bg-black border-2 border-red-500"
        >
          {" "}
          Add task
        </button>
      </div>
      <div className="flex flex-col items-center justify-center w-full bg-gray-100 list">
        {todoList.map((Task1,key)=>{
            return (
                <TaskH key={key} id={Task1.id} isCompleted={Task1.isCompleted} text={Task1.text} completeTask={completeTask} deleteTask={deleteTask}/>
            )
        })}
      </div>
    </>
  );
};

export default MainBody;
