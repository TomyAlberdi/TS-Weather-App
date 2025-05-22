import { useDataContext } from "@/Context/useDataContext";

const TitlePanel = () => {
  const { WeatherData } = useDataContext();

  return (
    <section className="col-start-1 col-span-full row-start-1 row-span-1 flex flex-col justify-center items-center font-light">
      {WeatherData?.loading ? (
        <span className="text-xl alternate-font">Loading...</span>
      ) : (
        <>
          <span className="text-xl alternate-font">Weather in</span>
          <span className="text-4xl alternate-font truncate">
            {WeatherData?.data?.location.name},{" "}
            {WeatherData?.data?.location.country}
          </span>
          <span className="text-xl alternate-font">
            At {WeatherData?.data?.location.localtime.substring(11, 16)}
          </span>
        </>
      )}
    </section>
  );
};
export default TitlePanel;
