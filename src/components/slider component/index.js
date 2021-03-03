import React, { useEffect, useState } from "react";

export const Slider = (props) => {
  //volume
  const [volume, setVolume] = useState(0.8);
  //handles volume
  const handleChange = (e) => {
    setVolume(e.target.value);
    props.handleChange(e.target.value);
  };

  useEffect(() => {
    const audio = document.querySelectorAll("audio");
    audio.forEach((item) => (item.volume = volume));
  });
  return (
    <div className="slider">
      <input
        type="range"
        min="0"
        max="1"
        value={volume}
        step="0.1"
        onChange={handleChange}
      />
    </div>
  );
};
