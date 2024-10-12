import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Article, NewsData } from "@/types/News";
import sondakika from "@/assets/sondakika.jpg";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

interface NewsListProps {
  newsData: NewsData;
}

const NewsList: React.FC<NewsListProps> = ({ newsData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {newsData.data.map((article: Article, index: number) => {
        const category =
          article.category === "general"
            ? "Genel"
            : article.category === "health"
            ? "Sağlık"
            : article.category === "sports"
            ? "Spor"
            : article.category === "technology"
            ? "Teknoloji"
            : article.category;
        return (
          <Card key={index} className="flex flex-col h-full">
            <CardHeader className="flex-shrink-0">
              <div className="relative h-48">
                {article.image ? (
                  <Image
                    src={sondakika}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    <span className="text-slate-900">No image available</span>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-slate-500">{category}</p>
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-slate-500 mb-4 line-clamp-3">
                {article.description}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between items-center mt-auto">
              <span className="text-sm text-slate-500">
                {new Date(article.published_at).toLocaleDateString()}
              </span>
              <Link
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Devamını Oku
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};

export default NewsList;
