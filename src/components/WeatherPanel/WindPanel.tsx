import { useDataContext } from "@/Context/useDataContext";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const WindPanel = () => {
  const { WeatherData } = useDataContext();

  if (WeatherData?.loading) {
    return <Skeleton className="col-start-4 col-span-3 row-start-4 row-span-2" />;
  }

  return (
    <Card className="col-start-4 col-span-3 row-start-4 row-span-2 border p-4">

    </Card>
  );
};

export default WindPanel;