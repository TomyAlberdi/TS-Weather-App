import { useDataContext } from "@/Context/useDataContext";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const PANEL_LAYOUTS = [
  "col-start-1 col-span-2 row-start-2 row-span-2",
  "col-start-5 col-span-2 row-start-2 row-span-2",
  "col-start-1 col-span-3 row-start-4 row-span-2",
] as const;

const LoadingSkeleton = () => (
  <>
    {PANEL_LAYOUTS.map((className, index) => (
      <Skeleton key={`skeleton-${index}`} className={className} />
    ))}
  </>
);

const WeatherCards = () => (
  <>
    {PANEL_LAYOUTS.map((className, index) => (
      <Card key={`card-${index}`} className={className} />
    ))}
  </>
);

const BasicPanels = () => {
  const { WeatherData } = useDataContext();

  return WeatherData?.loading ? <LoadingSkeleton /> : <WeatherCards />;
};

export default BasicPanels;
