import React, { useState } from "react";
import PropTypes from "prop-types";
import "./taskitem.css";
Taskitem.propTypes = {
  taskName: PropTypes.string,
  taskAuthor: PropTypes.string,
  taskStatus: PropTypes.string,
  taskDescription: PropTypes.string,
};
Taskitem.defaultProps = {
  taskName: "Công việc",
  taskAuthor: "Tên",
  taskStatus: "New",
  taskDescription: "Tập thể thao",
};
function Taskitem(props) {
  const { taskName, taskAuthor, taskStatus, taskDescription } = props;
  const [btnStatus, setBtnStatus] = useState("Start");
  const [status, setStatus] = useState(taskStatus);
  const [statusColor, setColor] = useState("#14ae5c");
  function changeStatus() {
    if (status === "New") {
      setStatus("Doing");
      setBtnStatus("Done");
      setColor("#F88F14");
    } else if (status === "Doing") {
      setStatus("Done");
      setBtnStatus("Renew");
      setColor("#675BF1");
    } else if (status === "Done") {
      setStatus("New");
      setBtnStatus("Start");
      setColor("#14ae5c");
    }
  }
  return (
    <div className='col-3'>
      <div className='task-item'>
        <div>
          <p className="strong">Title: {taskName}</p>
          <p>Creator: {taskAuthor}</p>
          <p className="strong" style={{ color: statusColor }}>Status: {status}</p>
          <div className="task-description">
            <p className="strong" >Description:</p>
            <p>{taskDescription}</p>
          </div>
        </div>
        <button className="status-btn strong" onClick={changeStatus}> {btnStatus} </button>
      </div>
    </div>
  );
}
export default Taskitem;
