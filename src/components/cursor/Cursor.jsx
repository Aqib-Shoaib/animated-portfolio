import { useState } from "react";
import "./cursor.scss";
import { useEffect } from "react";
import { motion } from "framer-motion";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(function () {
    const MouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", MouseMove);

    return () => {
      window.removeEventListener("mousemove", MouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x, y: position.y }}
    ></motion.div>
  );
}

export default Cursor;
