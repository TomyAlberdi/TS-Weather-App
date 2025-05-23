import { useDataContext } from "@/Context/useDataContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SearchBar = () => {
  const {
    getWeatherData,
    addToFavorites,
    removeFromFavorites,
    Favorites,
    WeatherData,
  } = useDataContext();

  const [city, setCity] = useState<string>("");

  //Add enter as search key event
  useEffect(() => {
    const searchCity = (e: KeyboardEvent) => {
      if (e.key === "Enter") changeCity();
    };
    document.addEventListener("keydown", searchCity);
    return () => {
      document.removeEventListener("keydown", searchCity);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  const changeCity = () => {
    console.log(city);
    if (city.length === 0) {
      toast.error("Please enter a valid city name");
      return;
    }
    getWeatherData(city);
    setCity("");
  };

  const handleFavorite = () => {
    const cityName = WeatherData?.data?.location.name;
    if (!cityName) return;
    if (Favorites.includes(cityName)) {
      removeFromFavorites(cityName);
      toast.success(`Removed ${cityName} from favorites`);
    } else {
      addToFavorites(cityName);
      toast.success(`Added ${cityName} to favorites`);
    }
  };

  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  useEffect(() => {
    if (WeatherData?.data?.location.name) {
      setIsFavorite(Favorites.includes(WeatherData.data.location.name));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [WeatherData, handleFavorite]);

  return (
    <div className="col-start-2 col-span-full bg-black/20 rounded-md p-3 flex items-center gap-3">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className={`flex justify-center items-center cursor-pointer text-muted-foreground ${
              isFavorite ? "!bg-emerald-900 text-white" : ""
            }`}
            variant={"outline"}
            onClick={handleFavorite}
          >
            <Star className="bigger-icon" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <span className="text-lg">
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </span>
        </TooltipContent>
      </Tooltip>
      <Input
        placeholder="Search by City"
        className="bg-white"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button
        className="flex justify-center items-center cursor-pointer text-muted-foreground"
        variant={"outline"}
        onClick={changeCity}
      >
        <Search className="bigger-icon" />
      </Button>
    </div>
  );
};
export default SearchBar;
