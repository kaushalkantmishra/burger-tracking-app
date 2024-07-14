import React, { useEffect, useRef, useState } from "react";

const AnalogClock = ({ speed = 1 }) => {
  const secondHandRef = useRef(null);
  const minuteHandRef = useRef(null);
  const hourHandRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date()); // Update current time
    }, 1000 / speed);

    return () => clearInterval(interval);
  }, [speed]);

  useEffect(() => {
    const secondHand = secondHandRef.current;
    const minuteHand = minuteHandRef.current;
    const hourHand = hourHandRef.current;

    const updateHands = () => {
      const seconds = currentTime.getSeconds();
      const minutes = currentTime.getMinutes();
      const hours = currentTime.getHours();

      secondHand.style.transform = `rotate(${(seconds / 60) * 360 - 90}deg)`;
      minuteHand.style.transform = `rotate(${(minutes / 60) * 360 - 90}deg)`;
      hourHand.style.transform = `rotate(${
        (hours / 12) * 360 + (minutes / 60) * 30 - 90
      }deg)`;
    };

    updateHands();
  }, [currentTime]);

  const hourMarkers = Array.from({ length: 12 }, (_, index) => index + 1);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-48 h-48 border-4 border-black rounded-full flex flex-col justify-center items-center">
        {hourMarkers.map((hour) => (
          <div
            key={hour}
            className="absolute text-black font-bold"
            style={{
              transform: `rotate(${hour * 30}deg) translate(0, -80px)`,
              left: "50%",
              top: "50%",
              marginLeft: "-3%",
              marginTop: "-7%",
            }}
          >
            {hour}
          </div>
        ))}
        <div
          ref={secondHandRef}
          className="absolute top-1/2 left-1/2 transform origin-left bg-red-500"
          style={{
            width: "45%",
            height: "2px",
          }}
        />
        <div
          ref={minuteHandRef}
          className="absolute top-1/2 left-1/2 transform origin-left bg-black"
          style={{
            width: "40%",
            height: "3px",
          }}
        />
        <div
          ref={hourHandRef}
          className="absolute top-1/2 left-1/2 transform origin-left bg-black"
          style={{
            width: "33%",
            height: "4px",
          }}
        />
        <div className="absolute w-3 h-3 bg-black rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default AnalogClock;
