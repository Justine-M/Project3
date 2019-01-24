import React from "react";
import "./formstyle.css";
import guestjumbotron from"./guestjumbotron";

// This file exports the Input, TextArea, and FormBtn components



export function Input(props) {
  return (
 
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="10" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <div className="btn">
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
    </div>
    
  );
}