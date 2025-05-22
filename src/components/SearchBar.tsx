import { useDataContext } from "@/Context/useDataContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const SearchBar = () => {
  const { getWeatherData } = useDataContext();

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

  return (
    <div className="col-start-2 col-span-full bg-black/20 rounded-md p-3 flex items-center gap-3">
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
