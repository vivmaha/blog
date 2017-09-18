import * as React from "react";
import { IArticleContent } from "../models/IArticleContent";


export interface IArticleSet {
    title: string;
    id: string;
    backgroundImageUrl: string;
    introduction: IArticleContent;
}