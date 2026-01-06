export type ArticleStatus = "done" | "in_dev";

export interface ArticleConfig {
  id: string;
  slug: string;
  title: string;
  status: ArticleStatus;
  icon?: string;
}

export const ARTICLES: ArticleConfig[] = [
  {
    id: "1",
    slug: "clinical-recommendations",
    title: "Клинические рекомендации по терапии ПОУГ",
    status: "done",
    icon: "/icons/article-1.svg",
  },
  {
    id: "2",
    slug: "neuroprotection",
    title: "Нейропротекция при глаукоме",
    status: "done",
    icon: "/icons/article-2.svg",
  },
  {
    id: "3",
    slug: "apg-difference",
    title: "АПГ: В чем разница между молекулами?",
    status: "done",
    icon: "/icons/article-3.svg",
  },
  {
    id: "4",
    slug: "lumistart",
    title: "ЛЮМИСТАРТ — новый старт в терапии ПОУГ",
    status: "done",
    icon: "/icons/article-4.svg",
  },
  {
    id: "5",
    slug: "quality-of-life",
    title: "Как повысить качество жизни у пациентов с глаукомой?",
    status: "in_dev",
    icon: "/icons/article-5.svg",
  },
  {
    id: "6",
    slug: "surface-diseases",
    title: "Заболевания поверхности глаз и приверженность к лечению",
    status: "in_dev",
    icon: "/icons/article-6.svg",
  },
  {
    id: "7",
    slug: "therapy-start",
    title: "Старт терапии: какой препарат выбрать?",
    status: "in_dev",
    icon: "/icons/article-7.svg",
  },
  {
    id: "8",
    slug: "patient-memo",
    title: "Памятка для пациентов",
    status: "in_dev",
    icon: "/icons/article-8.svg",
  },
];

// Хелперы для работы со статьями
export const getAllArticles = (): ArticleConfig[] => ARTICLES;

// export const getArticleBySlug = (slug: string): ArticleConfig | undefined =>
//   ARTICLES.find((article) => article.slug === slug);
//
// export const getArticleSlugs = (): string[] =>
//   ARTICLES.map((article) => article.slug);
//
// export const getDoneArticles = (): ArticleConfig[] =>
//   ARTICLES.filter((article) => article.status === "done");
//
// export const getInDevArticles = (): ArticleConfig[] =>
//   ARTICLES.filter((article) => article.status === "in_dev");
