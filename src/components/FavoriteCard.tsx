import { Card } from "@/components/ui/card";
import { useDataContext } from "@/Context/useDataContext";

interface FavoriteCardProps {
  location: string;
}

const FavoriteCard = ({ location }: FavoriteCardProps) => {
  const { getWeatherData } = useDataContext();

  return (
    <Card
      className="w-[92%] mt-2 flex items-center justify-center cursor-pointer md:hover:scale-105 transition-all duration-200 ease-in-out"
      onClick={() => getWeatherData(location)}
    >
      <span className="text-foreground">{location}</span>
    </Card>
  );
};
export default FavoriteCard;
