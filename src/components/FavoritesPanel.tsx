import { useDataContext } from "@/Context/useDataContext";
import { StarOff } from "lucide-react";
import FavoriteCard from "./FavoriteCard";
import { ScrollArea } from "@/components/ui/scroll-area";

interface FavoritesPanelProps {
  hidden: boolean;
}

const FavoritesPanel = ({ hidden }: FavoritesPanelProps) => {
  const { Favorites } = useDataContext();

  return (
    <ScrollArea
      className={`${
        hidden ? "md:hidden flex max-h-[60svh]" : "hidden md:flex bg-black/20"
      } row-start-1 col-start-1 col-span-1 row-span-full rounded-md`}
    >
      {Favorites?.length === 0 ? (
        <div className="w-full flex flex-col justify-center items-center gap-3 text-xl">
          <span className="text-xl text-center">No Favorites added.</span>
          <StarOff className="large-icon" />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          {Favorites?.map((location) => (
            <FavoriteCard location={location} key={location} />
          ))}
        </div>
      )}
    </ScrollArea>
  );
};
export default FavoritesPanel;
