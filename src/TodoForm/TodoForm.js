import React, { useState,useEffect } from "react";
import './Todoform.css'
import { useDispatch,useSelector } from "react-redux";
import { addTask,editTask } from "../action/configureAction";
const TodoForm = (props) => {
  const {editData,handelToggle} = props

  const {id:TaskId,date:TaskDate,title:TaskTitle,note:TaskNote} = editData ? editData : {}
  const dispatch = useDispatch();
  const [id,setid] = useState(Number (new Date()));
  const [date, setDate] = useState(" ");
  const [title, setTitle] = useState(" ");
  const [note, setNote] = useState(" ");
  useEffect(()=>{ 
    if(TaskId){
      setid(TaskId)
      setDate(TaskDate)
      setTitle(TaskTitle)
      setNote(TaskNote)
    }
  },[TaskId])
  const handelInput = (e) => {
    const targetName = e.target.name;
    if (targetName === "date") {
      setDate(e.target.value);
    } else if (targetName === "title") {
      setTitle(e.target.value);
    } else if (targetName === "note") {
      setNote(e.target.value);
    }
  };

  const handelSubmit = (e) => {
    e.preventDefault()
    const formData = {
      id:id,
      date:date,
      title:title,
      note:note
    }
    if(TaskId){
      dispatch(editTask(formData))
      handelToggle()
      Reset()
    }else{
      dispatch(addTask(formData))
      //console.log(formData)
      Reset()
    }
  }
  const Reset = () => {
    setid(Number(new Date()))
    setDate('') 
    setTitle('')
    setNote('')
  }
  const handelReset = () => {
    Reset()
  }
  return (
    <div className="d-flex justify-content-center">
      <div className="p-4 mt-3 todo_form">
        <form onSubmit={handelSubmit}>
          <div className="form-group mt-2">
            <label htmlFor="date" className="label">
              Date
            </label>
            <input
              type="date"
              name="date"
              className="form-control input"
              id="date"
              value={date}
              onChange={handelInput}
            />
          </div>
          <div className=" form-group mt-2">
            <label htmlFor="title" className="label mr-3">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="form-control input"
              id="title"
              value={title}
              onChange={handelInput}
            />
          </div>
          <div className=" form-group mt-2">
            <label htmlFor="note" className="label mr-2">
              Note
            </label>
            <textarea
              className="form-control input"
              value={note}
              name="note"
              id="note"
              onChange={handelInput}
            ></textarea>
          </div>
          <div className="mt-4">
            <button className="btn btn-success  form_btn" type="save">Save</button>
            <button
              className="btn btn-danger form_btn"
              style={{ marginLeft: "10px" }}
              onClick={handelReset}
              type="reset"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default TodoForm;
