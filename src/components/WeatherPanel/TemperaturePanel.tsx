import { useDataContext } from "@/Context/useDataContext";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const TemperaturePanel = () => {
  const { WeatherData } = useDataContext();

  if (WeatherData?.loading) {
    return <Skeleton className="col-start-3 col-span-2 row-start-2 row-span-2" />;
  }

  return (
    <Card className="col-start-3 col-span-2 row-start-2 row-span-2 border p-4">

    </Card>
  );
};

export default TemperaturePanel;