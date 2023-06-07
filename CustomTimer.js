import React, { useState, useEffect } from "react";

const CustomTimer = ({ propTime = 10 }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(propTime);
  }, []);

  useEffect(() => {
    let timerId = null;
    timerId = setInterval(() => {
      if (time === 0) {
        return clearInterval(timerId);
      }
      setTime((time) => time - 1);
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [time]);

  let timeMin = parseInt(time / 60);
  let timeSec = time - timeMin * 60;

  return (
    <div style={{ marginLeft: "auto", marginRight: "auto", width: "20%" }}>
      <h1
        style={{
          textAlign: "center",
          marginTop: "3rem",
          fontSize: "2rem",
          fontWeight: 500,
        }}
      >
        {timeMin}.{parseInt(timeSec / 10) === 0 ? `0${timeSec}` : timeSec}
      </h1>
    </div>
  );
};
export default CustomTimer;
