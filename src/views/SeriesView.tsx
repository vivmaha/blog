import * as React from "react";
import { useParams } from "react-router";
import { Series } from "../components/Series";

export const SeriesView: React.FC = () => {
  const { id } = useParams<{id: string}>();
  return (
    <Series
      id={id}
      bannerLink={{
        url: "/",
        text: "Home",
      }}
      />
  );
}