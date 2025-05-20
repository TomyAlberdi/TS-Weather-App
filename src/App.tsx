import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import { useDataContext } from "@/Context/useDataContext";
import { useEffect, useState } from "react";

function App() {
  const { WeatherData } = useDataContext();

  const [BackgroundClass, setBackgroundClass] = useState("cloudy");
  useEffect(() => {
    if (!WeatherData?.loading) {
      if (WeatherData?.data?.current.is_day == 1) {
        console.log("is day")
        setBackgroundClass("day");
      } else {
        console.log("is night")
        setBackgroundClass("night");
      }
    }
  }, [WeatherData]);

  return (
    <div className={`App md:min-h-screen min-h-[100svh] ${BackgroundClass}`}>
      <Navbar />
      <Toaster />
    </div>
  );
}

export default App;
