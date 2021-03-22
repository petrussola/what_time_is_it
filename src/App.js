import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  }, [time]);
  return (
    <div>
      <h1>Current Local Time</h1>
      <h2>{time.toLocaleTimeString()}</h2>
      <h3>{`${time.getDate()} / ${time.getMonth() + 1}
      / ${time.getFullYear()}`}</h3>
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
