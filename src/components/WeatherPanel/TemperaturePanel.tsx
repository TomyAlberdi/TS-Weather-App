import { useDataContext } from "@/Context/useDataContext";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const GRID_POSITION =
  "md:col-start-3 col-start-1 md:col-span-2 col-span-3 md:row-start-2 row-start-3 md:row-span-2 row-span-1";

const TemperaturePanel = () => {
  const { WeatherData } = useDataContext();

  if (WeatherData?.loading) {
    return <Skeleton className={GRID_POSITION} />;
  }

  return <Card className={`${GRID_POSITION} border p-4`}>temp</Card>;
};

export default TemperaturePanel;
