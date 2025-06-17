import { motion } from "framer-motion";
import React, { PropsWithChildren, useEffect } from "react";

export const EdgeButton = ({ children }: PropsWithChildren) => {
  const [degree, setDegree] = React.useState(0);

  useEffect(() => {
    const duration = 5 * 1000;

    const interval = setInterval(() => {
      setDegree((prev) => (prev + 1) % 360);
    }, duration / 360);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.button
      className="p-0.5 flex items-center text-white relative"
      whileTap={{ scale: 0.95 }}
    >
      <span
        className="flex absolute left-0 right-0 w-full h-full -z-1"
        style={{
          backgroundImage: `linear-gradient(${degree}deg, red,blue)`,
        }}
      />
      <span className="px-3 py-1 flex w-full h-full text-black bg-white">
        {children}
      </span>
    </motion.button>
  );
};
