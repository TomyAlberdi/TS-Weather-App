import TemperaturePanel from "@/components/WeatherPanel/TemperaturePanel";
import { Card } from "@/components/ui/card";

const WeatherPanel = () => {
  return (
    <div className="row-start-2 col-start-2 row-span-full col-span-full bg-black/20 rounded-md p-2 grid grid-cols-6 grid-rows-5 gap-2">
      <section className="col-start-1 col-span-full row-start-1 row-span-1">

      </section>
      <Card className="col-start-1 col-span-2 row-start-2 row-span-2">

      </Card>
      <TemperaturePanel />
      <Card className="col-start-5 col-span-2 row-start-2 row-span-2">

      </Card>
      <Card className="col-start-1 col-span-3 row-start-4 row-span-2">

      </Card>
      <Card className="col-start-4 col-span-3 row-start-4 row-span-2">

      </Card>
    </div>
  )
}
export default WeatherPanel