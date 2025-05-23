import { useDataContext } from "@/Context/useDataContext";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

const GRID_POSITION =
  "md:col-start-4 col-start-1 col-span-3 md:row-start-4 row-start-4 md:row-span-2 row-span-1";

const WindPanel = () => {
  const { WeatherData } = useDataContext();

  const [Unitkm, setUnitkm] = useState<boolean>(true);
  const toggleUnitkm = () => setUnitkm(!Unitkm);

  if (WeatherData?.loading) {
    return <Skeleton className={GRID_POSITION} />;
  }

  return (
    <Card
      className={`${GRID_POSITION} border text-foreground flex flex-col justify-between items-center py-0 gap-0`}
    >
      <div className="w-full flex justify-center items-center h-2/3 font-medium overflow-hidden">
        <span className="md:text-5xl text-3xl text-center">
          {Unitkm
            ? `${WeatherData?.data?.current.wind_kph} km/h`
            : `${WeatherData?.data?.current.wind_mph} mph`}
        </span>
      </div>
      <div className="w-full bg-black/30 h-1/3 rounded-b-xl flex justify-evenly items-center md:text-3xl text-xl">
        <span>km/h</span>
        <Switch checked={!Unitkm} onCheckedChange={toggleUnitkm} />
        <span>mph</span>
      </div>
    </Card>
  );
};

export default WindPanel;
