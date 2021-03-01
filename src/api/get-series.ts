import { getConfig } from "../app/config";
import { Series } from "./models/series";

type SeriesResponse = {
  series: Series;
};

export const getSeries = async (id: string): Promise<Series> => {
  const httpResponse = await fetch(`${getConfig().api}/series/${id}`);
  const seriesResponse = (await httpResponse.json()) as SeriesResponse;
  return seriesResponse.series;
};
