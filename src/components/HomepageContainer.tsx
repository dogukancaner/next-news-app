import React from "react";
import Hero from "./Hero";
import { NewsData } from "@/types/News";
import NewsList from "./NewsList";

interface HomepageContainerProps {
  data: NewsData;
}

const HomepageContainer = ({ data }: HomepageContainerProps) => {
  const newsData = data;

  console.log(newsData);
  return (
    <div className="max-w-7xl mx-auto">
      <Hero newsData={newsData} />
      <NewsList newsData={newsData} />
    </div>
  );
};

export default HomepageContainer;
