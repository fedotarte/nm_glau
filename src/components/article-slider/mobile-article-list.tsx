"use client";

import type { ArticleConfig } from "@/content";
import { ScrollShadowList } from "@/components/scroll-shadow-list";

import { ArticleListCard } from "./article-card";

type MobileArticleListProps = {
  articles: ArticleConfig[];
};

export const MobileArticleList = ({ articles }: MobileArticleListProps) => (
  <ScrollShadowList>
    {articles.map((article) => (
      <ArticleListCard article={article} key={article.id} />
    ))}
  </ScrollShadowList>
);
