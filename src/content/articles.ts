export type ArticleStatus = "done" | "in_dev";
export type ArticleLayout = "wide" | "narrow";

export enum ArticleSlug {
  ClinicalRecommendations = "clinical-recommendations",
  TherapyStart = "therapy-start",
  ApgDifference = "apg-difference",
  Lumistart = "lumistart",
  QualityOfLife = "quality-of-life",
  SurfaceDiseases = "surface-diseases",
  KarlovaVideo = "karlova-video",
  SeleznevVideo = "seleznev-video",
  Neuroprotection = "neuroprotection",
}

export interface ArticleConfig {
  id: string;
  slug: ArticleSlug;
  title: string;
  status: ArticleStatus;
  layout: ArticleLayout;
  descriptionBeforeAuth?: string;
  description?: string;
  titleBeforeAuth?: string;
  icon?: string | null;
  nextSlug?: string;
}

/**
 * Связи между материалами в формате linked-list:
 * текущий slug -> nextSlug.
 */
export const ARTICLE_NEXT_MAP: Partial<Record<ArticleSlug, ArticleSlug>> = {
  [ArticleSlug.ClinicalRecommendations]: ArticleSlug.Neuroprotection,
  [ArticleSlug.Neuroprotection]: ArticleSlug.ApgDifference,
  [ArticleSlug.ApgDifference]: ArticleSlug.Lumistart,
  [ArticleSlug.Lumistart]: ArticleSlug.QualityOfLife,
  [ArticleSlug.QualityOfLife]: ArticleSlug.SurfaceDiseases,
  [ArticleSlug.SurfaceDiseases]: ArticleSlug.TherapyStart,
  [ArticleSlug.TherapyStart]: ArticleSlug.KarlovaVideo,
  [ArticleSlug.KarlovaVideo]: ArticleSlug.SeleznevVideo,
  [ArticleSlug.SeleznevVideo]: ArticleSlug.ClinicalRecommendations,
};

const ARTICLES_BASE: ArticleConfig[] = [
  {
    id: ArticleSlug.ClinicalRecommendations,
    slug: ArticleSlug.ClinicalRecommendations,
    title: "Клинические рекомендации по терапии ПОУГ 2024",
    description:
      "Цель лечения глаукомы заключается в поддержании у пациента зрительных функций и связанного с ним качества жизни. Уровень ВГД может быть понижен с помощью местной гипотензивной терапии и других методов лечения. Стоит стремиться к использованию минимального количества лекарственных средств.",
    status: "done",
    layout: "wide",
    nextSlug: ARTICLE_NEXT_MAP[ArticleSlug.ClinicalRecommendations],
  },
  {
    id: ArticleSlug.ApgDifference,
    slug: ArticleSlug.ApgDifference,
    title: "АПГ: В чем разница между молекулами",
    description:
      "Сравнительный анализ аналогов простагландинов: особенности молекул и их влияние на эффективность терапии.",
    status: "done",
    layout: "wide",
    icon: "/icons/story.svg",
    nextSlug: ARTICLE_NEXT_MAP[ArticleSlug.ApgDifference],
  },
  {
    id: ArticleSlug.Lumistart,
    slug: ArticleSlug.Lumistart,
    titleBeforeAuth: "Новый старт в терапии ПОУГ",
    title: "ЛЮМИСТАРТ — новый старт в терапии ПОУГ",
    description:
      "Инновационный подход к лечению первичной открытоугольной глаукомы с применением современных препаратов.",
    status: "done",
    layout: "wide",
    icon: "/icons/shield-tick.svg",
    nextSlug: ARTICLE_NEXT_MAP[ArticleSlug.Lumistart],
  },
  {
    id: ArticleSlug.QualityOfLife,
    slug: ArticleSlug.QualityOfLife,
    title: "Как повысить качество жизни у пациентов с глаукомой?",
    description:
      "Комплексный подход к улучшению качества жизни пациентов: от диагностики до долгосрочной терапии.",
    status: "done",
    layout: "wide",
    icon: "/icons/ranking.svg",
    nextSlug: ARTICLE_NEXT_MAP[ArticleSlug.QualityOfLife],
  },
  {
    id: ArticleSlug.SurfaceDiseases,
    slug: ArticleSlug.SurfaceDiseases,
    title: "Заболевания поверхности глаз и приверженность к лечению",
    description:
      "Влияние заболеваний поверхности глаз на комплаентность пациентов и стратегии повышения приверженности.",
    status: "done",
    layout: "wide",
    icon: "/icons/clipboard-tick.svg",
    nextSlug: ARTICLE_NEXT_MAP[ArticleSlug.SurfaceDiseases],
  },
  {
    id: ArticleSlug.TherapyStart,
    slug: ArticleSlug.TherapyStart,
    title: "Старт терапии: какой препарат выбрать?",
    description:
      "Руководство по выбору оптимального препарата для начала терапии глаукомы.",
    status: "done",
    layout: "wide",
    icon: "/icons/signpost.svg",
  },
  {
    id: ArticleSlug.KarlovaVideo,
    slug: ArticleSlug.KarlovaVideo,
    title:
      "Карлова Е.В.\n О роли врачебной инертности в выборе стартовой терапии ПОУГ",
    description:
      "Селезнев А.В. О проблеме «рестарта» терапии ПОУГ после оперативного лечения",
    status: "in_dev",
    layout: "narrow",
    icon: "/icons/karlova.svg",
  },
  {
    id: ArticleSlug.SeleznevVideo,
    slug: ArticleSlug.SeleznevVideo,
    title:
      "Селезнев А.В.\n О проблеме «рестарта» терапии ПОУГ после оперативного лечения",
    description:
      "Селезнев А.В. О проблеме «рестарта» терапии ПОУГ после оперативного лечения",
    status: "in_dev",
    layout: "narrow",
    icon: "/icons/seleznev.svg",
  },
];

export const ARTICLES: ArticleConfig[] = ARTICLES_BASE.map((article) => ({
  ...article,
  nextSlug: ARTICLE_NEXT_MAP[article.slug],
}));

export const getAllArticles = (): ArticleConfig[] => ARTICLES;

export const getArticleBySlug = (slug: string): ArticleConfig | undefined =>
  ARTICLES.find((article) => article.slug === slug);

export const getDoneArticles = (): ArticleConfig[] =>
  ARTICLES.filter((article) => article.status === "done");
