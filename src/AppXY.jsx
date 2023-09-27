import React, { useState } from 'react';
import './AppXY.css';

const AppXY = () => {
  const [xy, setXy] = useState({ x: 0, y: 0, z: 0 });
  const xyHandler = (e) => {
    // setXy({ x: mouseX, y: mouseY });
    //만약 수평으로만 이동이 가능하다면?
    setXy((prev) => ({ ...prev, x: e.clientX }));
  };

  return (
    <div className="container" onPointerMove={xyHandler}>
      <div
        className="pointer"
        style={{ transform: `translate(${xy.x}px, ${xy.y}px)` }}
      ></div>
    </div>
  );
};

export default AppXY;
