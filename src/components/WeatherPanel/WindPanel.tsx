import { useDataContext } from "@/Context/useDataContext";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const GRID_POSITION =
  "md:col-start-4 col-start-1 col-span-3 md:row-start-4 row-start-4 md:row-span-2 row-span-1";

const WindPanel = () => {
  const { WeatherData } = useDataContext();

  if (WeatherData?.loading) {
    return <Skeleton className={GRID_POSITION} />;
  }

  return <Card className={`${GRID_POSITION} border p-4`}>wind</Card>;
};

export default WindPanel;
