"use client";

import { BlurButton } from "@/components/ui/blur-button";
import { EdgeButton } from "@/components/ui/edge-button";
import { EdgeLightButton } from "@/components/ui/edge-light-button";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1 className="text-xl font-bold">hi there!</h1>

      <div className="flex flex-col p-4 items-start gap-4">
        <BlurButton>this is beautiful blur button</BlurButton>
        <EdgeButton>this is beautiful edge button</EdgeButton>
        <EdgeLightButton>this is beautiful edge light button</EdgeLightButton>
        <EdgeLightButton>sm</EdgeLightButton>
      </div>
    </div>
  );
};

export default Page;
