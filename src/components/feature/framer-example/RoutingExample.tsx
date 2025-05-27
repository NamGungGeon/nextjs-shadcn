"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export const RoutingExample = () => {
  return (
    <div>
      <motion.div layoutId={`routing-card`} className="bg-red-500">
        <h3 className="px-2 py-10 font-semibold text-lg">
          <Link href="/playground/framer/card">click me!</Link>
        </h3>
      </motion.div>
    </div>
  );
};
export const RoutingExmapleContent = () => {
  return (
    <motion.div layoutId={`routing-card`} className="bg-red-500 h-screen">
      <div className="text-2xl">카드의 내용</div>
    </motion.div>
  );
};
