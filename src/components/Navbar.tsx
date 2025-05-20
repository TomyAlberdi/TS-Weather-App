import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Sparkle } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="h-[10svh] w-full flex justify-between items-center backdrop-blur-sm md:bg-black/0 bg-black/20 pl-[1svh]">
      <Drawer>
        <DrawerTrigger asChild>
          <Button className="md:hidden flex place-items-center w-[6svh] h-[6svh]" variant={"outline"}>
            <Sparkle className="large-icon" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          favorites
        </DrawerContent>
      </Drawer>
      <div className="cursor-pointer ease-in duration-200 ml-auto h-full w-[10svh] flex justify-center items-center hover:bg-black/30">
        <img src="/favicon.ico" alt="logo" className="w-[8svh] h-[8svh]" />
      </div>
    </nav>
  );
};
export default Navbar;
