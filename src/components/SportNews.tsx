import { getNewsData } from "@/lib/getNewsData";
import NewsList from "./NewsList";

const SportNews = async () => {
  const data = await getNewsData();

  return (
    <div className="max-w-7xl mx-auto">
      <NewsList newsData={data} />
    </div>
  );
};

export default SportNews;
