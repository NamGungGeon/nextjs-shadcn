import { motion } from "framer-motion";
import React, { PropsWithChildren, useEffect } from "react";

export const EdgeLightButton = ({ children }: PropsWithChildren) => {
  const [degree, setDegree] = React.useState(0);

  useEffect(() => {
    const duration = 3 * 1000;

    const interval = setInterval(() => {
      setDegree((prev) => (prev + 1) % 360);
    }, duration / 360);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.button
      className="flex items-center text-white relative shadow-[0,0,0] shadow-red-500 bg-red-300"
      whileTap={{ scale: 0.95 }}
    >
      <span
        className="flex absolute left-0 right-0 w-full h-full z-1"
        style={{
          backgroundImage: `linear-gradient(${degree}deg, red 0 15%, transparent 15% 85%, red 85% 100%)`,
        }}
      />
      <span className="m-0.5 px-3 py-1 flex w-full h-full text-white bg-red-300 z-2 font-semibold">
        {children}
      </span>
    </motion.button>
  );
};
