import React, { useEffect, useState } from "react";

const NumericClock = ({ speed = 1 }) => {
  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 120); // Set the initial time to 120 minutes later
    return now;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime((prevTime) => {
        const newTime = new Date(prevTime);
        newTime.setSeconds(newTime.getSeconds() - 1); // Count down by one second
        return newTime;
      });
    }, 1000 / speed);

    return () => clearInterval(interval);
  }, [speed]);

  const padZero = (num) => (num < 10 ? `0${num}` : num);

  const format12Hour = (date) => {
    let hours = date.getHours();
    const minutes = padZero(date.getMinutes());
    const seconds = padZero(date.getSeconds());
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // The hour '0' should be '12'
    return `${padZero(hours)}:${minutes}:${seconds} ${ampm}`;
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="text-black text-lg font-semibold">
        {format12Hour(currentTime)}
      </div>
    </div>
  );
};

export default NumericClock;
