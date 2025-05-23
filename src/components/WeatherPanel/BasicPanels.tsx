import { useDataContext } from "@/Context/useDataContext";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const PANEL_LAYOUTS = [
  "md:col-start-1 col-start-4 md:col-span-2 col-span-3 md:row-start-2 row-start-3 md:row-span-2 row-span-1 p-4",  
  "md:col-start-5 col-start-4 md:col-span-2 col-span-3 md:row-start-2 row-start-4 md:row-span-2 row-span-1 p-4",  
  "col-start-1 md:col-span-3 col-span-full md:row-start-4 row-start-2 md:row-span-2 row-span-1 p-4", 
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
    <Card className={PANEL_LAYOUTS[0]}>
      rain
    </Card>
    <Card className={PANEL_LAYOUTS[1]}>
      sun
    </Card>
    <Card className={PANEL_LAYOUTS[2]}>
      description
    </Card>
  </>
);

const BasicPanels = () => {
  const { WeatherData } = useDataContext();

  return WeatherData?.loading ? <LoadingSkeleton /> : <WeatherCards />;
};

export default BasicPanels;
