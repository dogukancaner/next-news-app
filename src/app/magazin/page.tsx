import NewsList from "@/components/NewsList";
import { getNewsData } from "@/lib/getNewsData";

const MagazinNews = async () => {
  const data = await getNewsData();

  return (
    <div className="max-w-7xl mx-auto">
      <NewsList newsData={data} />
    </div>
  );
};

export default MagazinNews;
