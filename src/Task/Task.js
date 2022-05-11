import React, { useState } from "react";
import "./task.css";

const Task = (props) => {
  const { id, date, title, note,handelRemove,handelEdit } = props;
  const [status, setStatus] = useState(false);

  const handelStatus = () => {
    setStatus(!status);
  };
 
  return (
    <div>
      <div className="card">
        <div className="card-body p-4">
          <input
            type="checkbox"
            onClick={handelStatus}
            className="form-check-input"
            style={{ float: "right" }}
          />
          <p className="taskDate">Date - {date}</p>
          <h1 className="taskTitle"> {title}</h1>
          <p className="taskNote">{note} </p>
          {status ? (
            <p className="text-success">Complete</p>
          ) : (
            <p className="text-danger">Not - Complete</p>
          )}
          <div className="taskBtn">
            <button className="btn btn-warning edit" onClick={()=>{handelEdit(id,date,title,note)}}>
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => {
                handelRemove(id);
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task;
