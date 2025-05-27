import { motion } from "framer-motion";

export default function DraggableCard() {
  return (
    <motion.div
      className="w-48 h-48 bg-blue-500 rounded-lg cursor-grab"
      drag
      dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
      whileTap={{ cursor: "grabbing" }}
    />
  );
}
