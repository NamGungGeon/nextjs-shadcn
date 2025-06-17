import { motion } from "framer-motion";
import React, { PropsWithChildren, useEffect } from "react";

export const BlurButton = ({ children }: PropsWithChildren) => {
  const [degree, setDegree] = React.useState(0);

  useEffect(() => {
    const duration = 5 * 1000;

    const interval = setInterval(() => {
      setDegree((prev) => (prev + 1) % 360);
    }, duration / 360);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.button className="text-white relative" whileTap={{ scale: 0.95 }}>
      <span
        className="flex opacity-30 blur-sm scale-105 absolute left-0 right-0 w-full h-full -z-1"
        style={{
          backgroundImage: `linear-gradient(${degree}deg, red,blue)`,
        }}
      />
      <span
        className="px-4 py-2 flex w-full h-full text-white"
        style={{
          backgroundImage: `linear-gradient(${degree}deg, red,blue)`,
        }}
      >
        {children}
      </span>
    </motion.button>
  );
};
