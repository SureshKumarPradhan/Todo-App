import React,{useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import TodoForm from "./TodoForm/TodoForm";
import Task from "./Task/Task";
import { useSelector ,useDispatch} from "react-redux";
import { removeTask } from "./action/configureAction";
const App = () => {
  const store = useSelector((state) => {
    return state.tasks;
  });
  const [editData,setEditData] = useState({})
  const [editToggle,setEditToggle] = useState(false)
  const dispatch = useDispatch();
  const handelToggle = () => {
    setEditToggle(!editToggle)
  }
  const handelRemove = (id) => {
    const confirm = window.confirm("Are you sure ....");
    if (confirm) {
      dispatch(removeTask(id));
    }
  };
  const handelEdit = (id,date,title,note) => {
    const eData = {
      id:id,
      date:date,
      title:title, 
      note:note
    }
    handelToggle()
    setEditData(eData)
   }
  
  return (
    <div className="container-fluid">
      <div className="container">
        <p className="text-center mt-2 brand">Todo App</p>
        <TodoForm editData = {editToggle ? editData : {}} handelToggle ={handelToggle} />
      </div>

      <div className="container-fluid mt-5 task_body">
        {store.map((val) => {
          return <Task key={val.id} handelRemove={handelRemove} handelEdit={handelEdit} {...val} />;
        })}
      </div>
    </div>
  );
};

export default App;
