import { useDataContext } from "@/Context/useDataContext";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";

const GRID_POSITION =
  "md:col-start-3 col-start-1 md:col-span-2 col-span-3 md:row-start-2 row-start-3 md:row-span-2 row-span-1";

const TemperaturePanel = () => {
  const { WeatherData } = useDataContext();

  const [UnitCelcius, setUnit] = useState<boolean>(true);
  const toggleUnit = () => setUnit(!UnitCelcius);

  if (WeatherData?.loading) {
    return <Skeleton className={GRID_POSITION} />;
  }

  return (
    <Card
      className={`${GRID_POSITION} border text-foreground flex flex-col justify-between items-center py-0 gap-0`}
    >
      <div className="w-full flex justify-center items-center h-2/3 font-medium overflow-hidden">
        <span className="md:text-5xl text-3xl">
          {UnitCelcius
            ? `${WeatherData?.data?.current.temp_c}°C`
            : `${WeatherData?.data?.current.temp_f}°F`}
        </span>
      </div>
      <div className="w-full bg-black/30 h-1/3 rounded-b-xl flex justify-evenly items-center md:text-3xl text-xl">
        <span>°C</span>
        <Switch checked={!UnitCelcius} onCheckedChange={toggleUnit} />
        <span>°F</span>
      </div>
    </Card>
  );
};

export default TemperaturePanel;
