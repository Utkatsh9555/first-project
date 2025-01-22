import React, { useState } from "react";
import ToDoList from "./ToDOList";

const App = () => {
  const data = {
    name: "",
    email: "",
    password: "",
  };
  const [inputData, setInputData] = useState(data);
  const [msg, setMsg] = useState(false);
  const HandelInput = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };
  const submit = (event) => {
    event.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.password) {
      alert("All fields are Menditory !");
    } else {
      setMsg(true);
    }
  };
  return (
    <>
      <from onSubmit={submit}>
        <div className="container">
          <div className="form-container">
            <div className="form">
              <h1 className="button">Login Form</h1>

              <input
                type="text"
                placeholder="enter Your Name"
                name="name"
                value={inputData.name}
                onChange={HandelInput}
              ></input>
              <input
                type="email"
                placeholder="enter Your email"
                name="email"
                value={inputData.email}
                onChange={HandelInput}
              ></input>
              <input
                type="password"
                placeholder="enter Your password"
                name="password"
                value={inputData.password}
                onChange={HandelInput}
              ></input>
            </div>
            <button className="button-submit">
              <a href="">submit</a>
            </button>
          </div>
        </div>
      </from>
    </>
  );
};

export default App;
