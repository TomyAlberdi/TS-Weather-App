import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { useDataContext } from "@/Context/useDataContext";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";
import FavoritesPanel from "@/components/FavoritesPanel";
import SearchBar from "@/components/SearchBar";
import WeatherPanel from "@/components/WeatherPanel/WeatherPanel";

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
    <div
      className={`App flex flex-col justify-start items-center md:min-h-screen min-h-[100svh] ${BackgroundClass}`}
    >
      <Navbar />
      <div className="min-h-[90svh] w-full flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:h-[60vh] md:w-3/5 h-[70svh] px-3 md:px-0 md:grid grid-cols-5 grid-rows-9 flex flex-col justify-center gap-2">
          <FavoritesPanel hidden={false} />
          <SearchBar />
          <WeatherPanel />
        </div>
      </div>

      <Toaster />
    </div>
  );
}

export default App;
