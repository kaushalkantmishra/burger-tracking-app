import React, { useState } from "react";
import AnalogClock from "../components/AnalogClock";
import SpeedSlider from "../components/SpeedSlider";
import Quote from "../components/Quote";
import NumericClock from "../components/NumericClock";
import ShareButton from "../components/ShareButton";

const TrackingPage = () => {
  const [speed, setSpeed] = useState(1);

  return (
    <div className="flex flex-col items-center p-8">
      <AnalogClock speed={speed} />
      <NumericClock speed={speed} />
      <SpeedSlider value={speed} onChange={setSpeed} />
      <Quote />
      <ShareButton speed={speed} />
    </div>
  );
};

export default TrackingPage;
