import { motion } from "framer-motion";
import React, { useState } from "react";

export const DrawerCardExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <DrawerCard isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <motion.div
        layoutId="drawer-card"
        className="p-4 bg-white rounded-lg shadow max-w-[500px]"
        onClick={() => setIsOpen(true)}
      >
        누르면 drawer가 열리는 카드입니다
      </motion.div>
    </>
  );
};

const DrawerCard = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div>
      <motion.div
        className="fixed top-0 left-0 size-full bg-black/50 flex items-center justify-center z-100"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: isOpen ? 1 : 0,
        }}
        onClick={onClose}
      >
        <motion.div
          layoutId="drawer-card"
          className="w-[512px] h-[512px] bg-white"
        >
          카드의 상세 내용
        </motion.div>
      </motion.div>
    </div>
  );
};
