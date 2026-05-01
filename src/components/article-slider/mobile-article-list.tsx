"use client";

import type { ArticleConfig } from "@/content";
import { ScrollShadowList } from "@/components/scroll-shadow-list";

import { ArticleListCard } from "./article-card";

export const MobileArticleList = ({ articles }: { articles: ArticleConfig[] }) => (
  <ScrollShadowList>
    {articles.map((article) => (
      <ArticleListCard article={article} key={article.id} />
    ))}
  </ScrollShadowList>
);
