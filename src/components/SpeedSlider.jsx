import React from "react";

const SpeedSlider = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(Number(event.target.value));
  };

  return (
    <div className="my-4 mt-5">
      <input
        type="range"
        min="1"
        max="10"
        step="1"
        value={value}
        onChange={handleChange}
        className="w-full"
      />
      <span className="block text-orange-500 text-center mt-2">{value}x</span>
    </div>
  );
};

export default SpeedSlider;
