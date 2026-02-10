import { useEffect, useRef, useState } from "react";

type CustomCursorProps = {
  enabled?: boolean;
};

export default function CustomCursor({ enabled = true }: CustomCursorProps) {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mouseenter", onEnter);
    };
  }, [enabled, visible]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        transform: `translate3d(${pos.x - 10}px, ${pos.y - 10}px, 0)`,
        width: 20,
        height: 20,
        borderRadius: 9999,
        border: "2px solid rgba(212, 175, 55, 0.9)", // dorado
        boxShadow: "0 0 18px rgba(212, 175, 55, 0.45)",
        pointerEvents: "none",
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: "opacity 160ms ease",
        mixBlendMode: "screen",
      }}
    />
  );
}
