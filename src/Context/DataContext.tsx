import type { ResponseData } from "@/lib/DataInterfaces";
import { createContext } from "react";

export interface DataContextType {
  Favorites: string[];
  addToFavorites: (location: string) => void;
  getWeatherData: (location: string) => Promise<ResponseData>;
}

export const DataContext = createContext<DataContextType | null>(null);
