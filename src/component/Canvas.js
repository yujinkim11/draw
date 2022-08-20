import { useEffect, useRef, useState } from "react";

export const Canvas = () => {
  const canvasRef = useRef(null);

  return (
    <div className="canvasWrap">
      <canvas ref={canvasRef} width={800} height={800}></canvas>
    </div>
  );
};
