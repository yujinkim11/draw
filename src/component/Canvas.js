import { useEffect, useRef, useState } from "react";

export const Canvas = () => {
  const canvasRef = useRef(null);
  const [getCtx, setGetCtx] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 800;
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#000000";

    ctx.rect(115, 115, 100, 100);
    ctx.stroke();

    setGetCtx(ctx);
  }, []);

  return (
    <div className="canvasWrap">
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};
