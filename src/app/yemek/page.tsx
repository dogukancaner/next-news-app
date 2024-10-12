import NewsList from "@/components/NewsList";
import { getNewsData } from "@/lib/getNewsData";

const FoodNews = async () => {
  const data = await getNewsData();

  return (
    <div className="max-w-7xl mx-auto">
      <NewsList newsData={data} />
    </div>
  );
};

export default FoodNews;
