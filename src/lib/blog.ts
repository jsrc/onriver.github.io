import { getCollection, type CollectionEntry } from "astro:content";
import type { Locale } from "../data/site";

export type BlogEntry = CollectionEntry<"blog">;

export async function getPostsByLocale(locale: Locale) {
  const posts = await getCollection("blog", ({ data }) => data.locale === locale);

  return posts.sort(
    (left, right) =>
      right.data.publishDate.getTime() - left.data.publishDate.getTime()
  );
}

export function getPostUrl(entry: BlogEntry) {
  const prefix = entry.data.locale === "en" ? "/en" : "";
  return `${prefix}/posts/${entry.data.pathSlug}/`;
}

export function formatDate(date: Date, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "zh-cn" ? "zh-CN" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);
}

export function collectTags(entries: BlogEntry[]) {
  return [...new Set(entries.flatMap((entry) => entry.data.tags))].sort((left, right) =>
    left.localeCompare(right)
  );
}

export async function findTranslation(entry: BlogEntry) {
  const candidates = await getCollection(
    "blog",
    ({ data }) =>
      data.translationKey === entry.data.translationKey &&
      data.locale !== entry.data.locale
  );

  return candidates[0];
}
