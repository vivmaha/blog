import { config } from "dotenv";
import { writeFile } from "fs/promises";
import { getSeries } from "../src/api/get-series";
import fetch from "node-fetch";

// As we add more articles, we'll need to update the sitemap.
// Perhaps we can automate this (more... so that we it also gets
// trigger whenever an article/series is added.)

// The api client  is written using fetch, which is provided by the browser,
// not by node (where this script runs). We pretend that fetch exists (using
// node-fetch instead) so that we can reeuse that code in this script.
// @ts-ignore
global.fetch = fetch;

(async () => {
  config({ path: ".env.production" });
  const urls = ["", "/article/about"];
  const homeSeries = await getSeries("home");
  const seriesIds = new Set(
    homeSeries.articles
      .map((a) => a.series)
      .filter((s) => s !== undefined)
      .map((s) => s?.id)
  );
  for (const seriesId of seriesIds) {
    urls.push(`/series/${seriesId}`);
  }
  const articleIds = homeSeries.articles.map((a) => a.id);
  for (const seriesId of articleIds) {
    urls.push(`/article/${seriesId}`);
  }
  const text = urls.map((url) => `http://notesbyv.com${url}`).join("\n");
  await writeFile("public/sitemap.txt", text);
})().then(
  () => console.log("done"),
  (e) => console.log(e)
);
