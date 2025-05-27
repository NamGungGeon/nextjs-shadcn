"use client";

import React from "react";
import { CardList } from "./CardExmaple";
import DraggableCard from "./DraggableExample";
import { RoutingExample } from "./RoutingExample";
import { DrawerCardExample } from "./DrawerCardExample";

export const FramerExample = () => {
  return (
    <div>
      <h2 className="font-bold text-lg">Card shuffle example</h2>
      <CardList />
      <h2 className="font-bold text-lg">Draggable example</h2>
      <DraggableCard />
      <h2 className="font-bold text-lg">Routing example</h2>
      <RoutingExample />
      <h2 className="font-bold text-lg">Drawer example</h2>
      <DrawerCardExample />
    </div>
  );
};
