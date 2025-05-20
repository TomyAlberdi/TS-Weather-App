import type { ResponseData } from "@/lib/DataInterfaces";
import { createContext } from "react";

export interface DataContextType {
  Favorites: string[];
  addToFavorites: (location: string) => void;
  WeatherData: ResponseData | null;
  getWeatherData: (location: string) => Promise<void>;
}

export const DataContext = createContext<DataContextType | null>(null);
