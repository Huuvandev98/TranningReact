import React, {useState} from "react";
import PropTypes from "prop-types";
import './formuser.css'
FormUser.propTypes = {};

function FormUser(props) {
    const [display, setdislay] = useState("block");
  return (
    <div className="" style={{ display:display }}>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-body">
            <form action="">
              <div className="box-form">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter Name" />
              </div>
              <div className="box-form">
                <label htmlFor="">Author</label>
                <input type="text" placeholder="Enter Author" />
              </div>
              <div className="box-form">
                <label htmlFor="">Description</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Enter Desc"
                ></textarea>
              </div>
              <button className="btn btn-from-add">
                <span>Add</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormUser;
