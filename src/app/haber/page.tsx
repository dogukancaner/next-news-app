import React from "react";
import { getNewsData } from "@/lib/getNewsData";
import NewsList from "@/components/NewsList";

const NewsPage = async () => {
  const data = await getNewsData();

  return (
    <div className="max-w-7xl mx-auto">
      <NewsList newsData={data} />
    </div>
  );
};

export default NewsPage;
