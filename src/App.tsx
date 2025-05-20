import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { useDataContext } from "@/Context/useDataContext";
import { useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";

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
      <Toaster />
    </div>
  );
}

export default App;
