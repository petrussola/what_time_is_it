import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [time, setTime] = useState(new Date());
  const [timeZone, setTimeZone] = useState("GMT");

  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div>
      <h1>Current Local Time</h1>
      <h2>{`${time.toLocaleTimeString("en-GB", { timeZone: timeZone })} | ${timeZone}`}</h2>
      <label htmlFor="time-selector">Select time zone:</label>
      <select id="time-selector" onChange={(e) => setTimeZone(e.target.value)}>
        <option value="GMT">GMT</option>
        <option value="PST">PST</option>
        <option value="CET">CET</option>
      </select>
      <h3>{`${time.getDate()} / ${time.getMonth() + 1}
      / ${time.getFullYear()}`}</h3>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
