import React from "react";
import { getNewsData } from "@/lib/getNewsData";
import NewsList from "@/components/NewsList";

const NewsPage = async () => {
  const data = await getNewsData();

  return (
    <div>
      <NewsList newsData={data} />
    </div>
  );
};

export default NewsPage;
