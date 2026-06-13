import { useRef, useEffect } from "react";

const ShapeGrid = ({
  direction = "right",
  speed = 1,
  borderColor = "#999",
  squareSize = 40,
  hoverFillColor = "#222",
  shape = "square",
  hoverTrailAmount = 0,
  className = "",
}) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);

  const gridOffset = useRef({ x: 0, y: 0 });
  const hoveredSquare = useRef(null);
  const trailCells = useRef([]);
  const cellOpacities = useRef(new Map());

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
    });

    const isHex = shape === "hexagon";
    const isTri = shape === "triangle";

    const isLowPower =
      window.innerWidth < 1024 ||
      window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches;

    // ================= FPS LIMIT =================
    let lastTime = 0;
    const fps = isLowPower ? 20 : 30;
    const frameInterval = 1000 / fps;

    // ================= RESIZE =================
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();

    const resizeObserver = new ResizeObserver(resizeCanvas);

    resizeObserver.observe(canvas);

    // ================= SHAPES =================
    const drawHex = (cx, cy, size) => {
      ctx.beginPath();

      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;

        const x = cx + size * Math.cos(angle);

        const y = cy + size * Math.sin(angle);

        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }

      ctx.closePath();
    };

    const drawCircle = (cx, cy, size) => {
      ctx.beginPath();

      ctx.arc(cx, cy, size / 2, 0, Math.PI * 2);

      ctx.closePath();
    };

    const drawTriangle = (cx, cy, size, flip) => {
      ctx.beginPath();

      if (flip) {
        ctx.moveTo(cx, cy + size / 2);

        ctx.lineTo(cx + size / 2, cy - size / 2);

        ctx.lineTo(cx - size / 2, cy - size / 2);
      } else {
        ctx.moveTo(cx, cy - size / 2);

        ctx.lineTo(cx + size / 2, cy + size / 2);

        ctx.lineTo(cx - size / 2, cy + size / 2);
      }

      ctx.closePath();
    };

    // ================= OPACITY =================
    const updateCellOpacities = () => {
      const targets = new Map();

      if (hoveredSquare.current) {
        targets.set(
          `${hoveredSquare.current.x},${hoveredSquare.current.y}`,
          1
        );
      }

      if (hoverTrailAmount > 0) {
        for (
          let i = 0;
          i < trailCells.current.length;
          i++
        ) {
          const t = trailCells.current[i];

          const key = `${t.x},${t.y}`;

          if (!targets.has(key)) {
            targets.set(
              key,
              (trailCells.current.length - i) /
                (trailCells.current.length + 1)
            );
          }
        }
      }

      for (const [key] of targets) {
        if (!cellOpacities.current.has(key)) {
          cellOpacities.current.set(key, 0);
        }
      }

      for (const [key, opacity] of cellOpacities.current) {
        const target = targets.get(key) || 0;

        const next = opacity + (target - opacity) * 0.15;

        if (next < 0.005) {
          cellOpacities.current.delete(key);
        } else {
          cellOpacities.current.set(key, next);
        }
      }
    };

    // ================= DRAW GRID =================
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const offsetX =
        ((gridOffset.current.x % squareSize) + squareSize) %
        squareSize;

      const offsetY =
        ((gridOffset.current.y % squareSize) + squareSize) %
        squareSize;

      const cols = Math.ceil(canvas.width / squareSize) + 1;

      const rows =
        Math.ceil(canvas.height / squareSize) + 1;

      ctx.strokeStyle = borderColor;

      for (let col = -1; col < cols; col++) {
        for (let row = -1; row < rows; row++) {
          const x =
            col * squareSize + squareSize / 2 + offsetX;

          const y =
            row * squareSize + squareSize / 2 + offsetY;

          const cellKey = `${col},${row}`;

          const alpha = cellOpacities.current.get(cellKey);

          // Hover Fill
          if (alpha) {
            ctx.globalAlpha = alpha;

            ctx.fillStyle = hoverFillColor;

            if (shape === "circle") {
              drawCircle(x, y, squareSize);
            } else if (isHex) {
              drawHex(x, y, squareSize / 2);
            } else if (isTri) {
              drawTriangle(
                x,
                y,
                squareSize,
                (col + row) % 2 !== 0
              );
            } else {
              ctx.fillRect(
                x - squareSize / 2,
                y - squareSize / 2,
                squareSize,
                squareSize
              );
            }

            ctx.fill();
            ctx.globalAlpha = 1;
          }

          // Stroke
          if (shape === "circle") {
            drawCircle(x, y, squareSize);

            ctx.stroke();
          } else if (isHex) {
            drawHex(x, y, squareSize / 2);

            ctx.stroke();
          } else if (isTri) {
            drawTriangle(
              x,
              y,
              squareSize,
              (col + row) % 2 !== 0
            );

            ctx.stroke();
          } else {
            ctx.strokeRect(
              x - squareSize / 2,
              y - squareSize / 2,
              squareSize,
              squareSize
            );
          }
        }
      }
    };

    // ================= ANIMATE =================
    const animate = (timestamp) => {
      if (timestamp - lastTime < frameInterval) {
        requestRef.current = requestAnimationFrame(animate);

        return;
      }

      lastTime = timestamp;

      const effectiveSpeed = isLowPower
        ? Math.max(speed * 0.35, 0.03)
        : Math.max(speed, 0.1);

      switch (direction) {
        case "left":
          gridOffset.current.x += effectiveSpeed;
          break;

        case "right":
          gridOffset.current.x -= effectiveSpeed;
          break;

        case "up":
          gridOffset.current.y += effectiveSpeed;
          break;

        case "down":
          gridOffset.current.y -= effectiveSpeed;
          break;

        case "diagonal":
          gridOffset.current.x -= effectiveSpeed;

          gridOffset.current.y -= effectiveSpeed;
          break;

        default:
          break;
      }

      updateCellOpacities();
      drawGrid();

      requestRef.current = requestAnimationFrame(animate);
    };

    // ================= MOUSE =================
    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();

      const mouseX = event.clientX - rect.left;

      const mouseY = event.clientY - rect.top;

      const offsetX =
        ((gridOffset.current.x % squareSize) + squareSize) %
        squareSize;

      const offsetY =
        ((gridOffset.current.y % squareSize) + squareSize) %
        squareSize;

      const adjustedX = mouseX - offsetX;

      const adjustedY = mouseY - offsetY;

      const col = Math.floor(adjustedX / squareSize);

      const row = Math.floor(adjustedY / squareSize);

      if (
        !hoveredSquare.current ||
        hoveredSquare.current.x !== col ||
        hoveredSquare.current.y !== row
      ) {
        if (hoveredSquare.current && hoverTrailAmount > 0) {
          trailCells.current.unshift({
            ...hoveredSquare.current,
          });

          if (
            trailCells.current.length > hoverTrailAmount
          ) {
            trailCells.current.length = hoverTrailAmount;
          }
        }

        hoveredSquare.current = {
          x: col,
          y: row,
        };
      }
    };

    const handleMouseLeave = () => {
      hoveredSquare.current = null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    canvas.addEventListener("mouseleave", handleMouseLeave);

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);

      resizeObserver.disconnect();

      canvas.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      canvas.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, [
    direction,
    speed,
    borderColor,
    squareSize,
    hoverFillColor,
    shape,
    hoverTrailAmount,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`shapegrid-canvas ${className}`}
    />
  );
};

export default ShapeGrid;
