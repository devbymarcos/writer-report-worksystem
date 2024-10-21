import React from "react";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

export const Header = ({ onClick }: any) => {
  return (
    <header>
      <div className="flex justify-between container mx-auto items-center p-4">
        <Link href="/">
          <h1 className="font-bold  text-lg">Write Report</h1>
        </Link>

        <Button onClick={onClick} variant="outline">
          <AlignJustify />
        </Button>
      </div>
    </header>
  );
};
