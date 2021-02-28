// TODO - Import type from blog-server module
export type ArticleSummary = {
  /**
   * Unique.
   * Human readable since it is used for article URL.
   * kebab-case.
   **/
  id: string;
  /**
   * Simplified extended ISO format (ISO 8601).
   * YYYY-MM-DDTHH:mm:ss.sssZ
   * The timezone is always zero UTC offset, as denoted by the suffix "Z"
   **/
  date: string;

  title: string;
  preview: string;

  nextArticleId?: string;
  previousArticleId?: string;
};
