import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Playground = () => {
  return (
    <div>
      <h1>Playground</h1>
      <h2>Buttons</h2>
      <div>
        <Button>default</Button>
        <Button variant="destructive">destructive</Button>
        <Button variant="outline">outline</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="link">link</Button>
        <Button asChild>
          <Link href="/">링크 버튼</Link>
        </Button>
      </div>
    </div>
  );
};

export default Playground;
