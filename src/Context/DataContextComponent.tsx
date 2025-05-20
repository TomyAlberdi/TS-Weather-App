import { useEffect, useState, type ReactNode } from "react";
import { DataContext, type DataContextType } from "@/Context/DataContext";
import type { ResponseData } from "@/lib/DataInterfaces";
import { toast } from "sonner";

interface DataContextComponentProps {
  children: ReactNode;
}

const DataContextComponent: React.FC<DataContextComponentProps> = ({
  children,
}) => {
  const API_KEY = import.meta.env.VITE_X_RAPIDAPI_KEY;

  const [Favorites, setFavorites] = useState<string[]>([]);

  const addToFavorites = (location: string) => {
    setFavorites((prevFavs) => [...prevFavs, location]);
  };

  const [WeatherData, setWeatherData] = useState<ResponseData>({
    loading: true,
    data: null,
  });

  const getWeatherData = async (location: string) => {
    const returnData: ResponseData = {
      loading: true,
      data: null,
    };
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${location}`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": API_KEY,
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      });
      if (!response.ok) {
        toast.error("Something went wrong!");
        return;
      }
      const res = await response.json();
      returnData.data = res;
    } catch (error) {
      toast.error("Something went wrong!");
      console.error(error);
    } finally {
      returnData.loading = false;
    }
    setWeatherData(returnData);
  };

  useEffect(() => {
    getWeatherData("La Plata");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const exportData: DataContextType = {
    Favorites,
    addToFavorites,
    WeatherData,
    getWeatherData,
  };

  return (
    <DataContext.Provider value={exportData}>{children}</DataContext.Provider>
  );
};

export default DataContextComponent;
