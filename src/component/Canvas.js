import { useRef } from "react";

export const Canvas = () => {
  const canvas = useRef(null);

  return (
    <div>
      <canvas
        ref={canvas}
        width={800}
        height={800}
        className="canvasWrap"
      ></canvas>
    </div>
  );
};
