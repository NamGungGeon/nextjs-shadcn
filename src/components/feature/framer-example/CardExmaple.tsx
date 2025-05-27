import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export function CardList() {
  // layout animations with framer-motion
  const [items, setItem] = useState([1, 2, 3, 4]);

  return (
    <div className="grid grid-cols-2 gap-4">
      <AnimatePresence>
        {items.map((item) => (
          <motion.div
            key={item}
            layout
            className="p-4 bg-white rounded-lg shadow"
          >
            Item {item}
          </motion.div>
        ))}
      </AnimatePresence>
      <button
        className="px-4 py-2 text-lg bg-red-500 text-white"
        onClick={() => {
          setItem((prev) => prev.slice().sort(() => Math.random() - 0.5));
        }}
      >
        shuffle
      </button>
      <button
        className="px-4 py-2 text-lg bg-red-500 text-white"
        onClick={() => {
          setItem((prev) => [...prev, prev.length + 1]);
        }}
      >
        Add
      </button>
      <button
        className="px-4 py-2 text-lg bg-red-500 text-white"
        onClick={() => {
          setItem((prev) => prev.slice(0, -1));
        }}
      >
        Remove
      </button>
    </div>
  );
}
