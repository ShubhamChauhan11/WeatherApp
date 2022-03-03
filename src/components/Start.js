import React from "react";
import {} from "react-icons/fa";
import "./Start.css";
const Start = (props) => {
  const { input, setInput, fetchData } = props;

  console.log(input);
  return (
    <div className="container">
      <div className="first">
        <h1>React Weather App</h1>
        <form onSubmit={fetchData}>
          <input
            type="text"
            placeholder="type city"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};
export default Start;
