import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { useDataContext } from "@/Context/useDataContext";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";
import FavoritesPanel from "@/components/FavoritesPanel";
import SearchBar from "@/components/SearchBar";
import WeatherPanel from "@/components/WeatherPanel";

function App() {
  const { WeatherData } = useDataContext();
  const { setTheme } = useTheme();

  const [BackgroundClass, setBackgroundClass] = useState("cloudy");
  useEffect(() => {
    if (!WeatherData?.loading) {
      if (WeatherData?.data?.current.is_day == 1) {
        setBackgroundClass("day");
        setTheme("light");
      } else {
        setBackgroundClass("night");
        setTheme("dark");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [WeatherData]);

  return (
    <div className={`App md:min-h-screen min-h-[100svh] ${BackgroundClass}`}>
      <Navbar />
      <div className="w-full md:px-3 h-[90svh] flex items-center justify-center">
        <div className="flex flex-col w-full md:w-1/2 px-3 md:px-0 gap-3 md:max-w-[750px] relative">
          <FavoritesPanel />
          <SearchBar />
          <WeatherPanel />
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default App;
