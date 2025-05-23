import { useDataContext } from "@/Context/useDataContext";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { ResponseData } from "@/lib/DataInterfaces";
import { Droplet, Sun } from "lucide-react";

const GENERAL_CLASSES =
  " text-foreground font-medium md:row-span-2 row-span-1 p-4 flex flex-row justify-center items-center gap-3";

const PANEL_LAYOUTS = [
  "md:col-start-1 col-start-4 md:col-span-2 col-span-3 md:row-start-2 row-start-3 md:row-span-2",
  "md:col-start-5 col-start-4 md:col-span-2 col-span-3 md:row-start-2 row-start-4 md:row-span-2",
  "col-start-1 md:col-span-3 col-span-full md:row-start-4 row-start-2 md:row-span-2",
] as const;

const LoadingSkeleton = () => (
  <>
    {PANEL_LAYOUTS.map((className, index) => (
      <Skeleton key={`skeleton-${index}`} className={className} />
    ))}
  </>
);

const WeatherCards = ({
  WeatherData,
}: {
  WeatherData: ResponseData | null;
}) => (
  <>
    <Tooltip>
      <TooltipTrigger asChild>
        <Card className={PANEL_LAYOUTS[0] + GENERAL_CLASSES + " text-5xl"}>
          <Droplet className="bigger-icon" />
          {WeatherData?.data?.current.humidity}
        </Card>
      </TooltipTrigger>
      <TooltipContent>
        <span className="text-xl">Humidity</span>
      </TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger asChild>
        <Card className={PANEL_LAYOUTS[1] + GENERAL_CLASSES + " text-5xl"}>
          <Sun className="bigger-icon" />
          {WeatherData?.data?.current.uv}
        </Card>
      </TooltipTrigger>
      <TooltipContent>
        <span className="text-xl">UV Index</span>
      </TooltipContent>
    </Tooltip>
    <Tooltip>
      <TooltipTrigger asChild>
        <Card className={PANEL_LAYOUTS[2] + GENERAL_CLASSES + " "}>
          <img src={WeatherData?.data?.current.condition.icon} alt="Weather condition icon" className="w-20" />
          <span className="text-lg line-clamp-4">
            {WeatherData?.data?.current.condition.text}
          </span>
        </Card>
      </TooltipTrigger>
      <TooltipContent>
        {WeatherData?.data?.current.condition.text}
      </TooltipContent>
    </Tooltip>
  </>
);

const BasicPanels = () => {
  const { WeatherData } = useDataContext();

  return WeatherData?.loading ? (
    <LoadingSkeleton />
  ) : (
    <WeatherCards WeatherData={WeatherData} />
  );
};

export default BasicPanels;
