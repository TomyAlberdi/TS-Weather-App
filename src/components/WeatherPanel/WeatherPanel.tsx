import TemperaturePanel from "@/components/WeatherPanel/TemperaturePanel";
import WindPanel from "@/components/WeatherPanel/WindPanel";
import BasicPanels from "@/components/WeatherPanel/BasicPanels";
import TitlePanel from "@/components/WeatherPanel/TitlePanel";

const WeatherPanel = () => {
  //TODO: Refactor grid to mobile layout
  return (
    <div className="h-full row-start-2 col-start-2 row-span-full col-span-full bg-black/30 rounded-md p-2 grid grid-cols-6 md:grid-rows-5 grid-rows-4 gap-2">
      <TitlePanel />
      <BasicPanels />
      <TemperaturePanel />
      <WindPanel />
    </div>
  );
};
export default WeatherPanel;
