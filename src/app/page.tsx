import Link from "next/link";
import { dataNav } from "@/data-nav";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-3 px-2 md:px-0 md:grid-cols-4  gap-5">
      {dataNav.map((navItem) => {
        return (
          <Button
            asChild
            className="text-center   font-bold bg-zinc-400 text-black hover:bg-slate-400 hover:text-white "
          >
            <Link href={navItem.path}>{navItem.title}</Link>
          </Button>
        );
      })}
    </div>
  );
}
