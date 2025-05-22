import { useDataContext } from "@/Context/useDataContext";
import TemperaturePanel from "@/components/WeatherPanel/TemperaturePanel";
import { Card } from "@/components/ui/card";

const WeatherPanel = () => {
  const { WeatherData } = useDataContext();

  return (
    <div className="row-start-2 col-start-2 row-span-full col-span-full bg-black/30 rounded-md p-2 grid grid-cols-6 grid-rows-5 gap-2">
      <section className="col-start-1 col-span-full row-start-1 row-span-1 flex flex-col justify-center items-center font-light">
        <span className="text-xl alternate-font">Weather in</span>
        <span className="text-4xl alternate-font truncate">{WeatherData?.data?.location.name}, {WeatherData?.data?.location.country}</span>
        <span className="text-xl alternate-font">
          At {WeatherData?.data?.location.localtime.substring(11, 16)}
        </span>
      </section>
      <Card className="col-start-1 col-span-2 row-start-2 row-span-2"></Card>
      <TemperaturePanel />
      <Card className="col-start-5 col-span-2 row-start-2 row-span-2"></Card>
      <Card className="col-start-1 col-span-3 row-start-4 row-span-2"></Card>
      <Card className="col-start-4 col-span-3 row-start-4 row-span-2"></Card>
    </div>
  );
};
export default WeatherPanel;
