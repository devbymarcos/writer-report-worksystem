import React from "react";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";

export const Header = ({ onClick }: any) => {
  return (
    <header>
      <div className="flex justify-between container mx-auto items-center p-4">
        <h1 className="font-bold  text-lg">Writer report</h1>
        <Button onClick={onClick} variant="outline">
          <AlignJustify />
        </Button>
      </div>
    </header>
  );
};
