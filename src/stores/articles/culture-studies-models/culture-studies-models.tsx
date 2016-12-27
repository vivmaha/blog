import * as React from "react";
import { IArticle } from "../../../models/IArticle";

class Article implements IArticle {
    title = 'Culture Studies & Models';
    date = new Date(2016, 10, 8);
    id = 'culture-studies-models';
    author = 'Vivek Maharajh';
    sections = [
        <section>
            <h1>In class exercise</h1>
            <p>I paired with another student to compare our views of time. We ended up with the above sketch.</p>
            <p>The above sketch was my view — a timeline consisting of past, present, and future. The sketch below was my classmate's — a clock and a checklist of things to do.</p>
            <p>Each pair presented their views to the class. There were many unique views of time, perhaps indicative of differences in culture.</p>            
        </section>,
        <section>
            <h1>Aspirations</h1>
            <p>I don't see myself travelling to many countries within the next couple years. I appreciated the ideas around getting cultural exposure by simply reaching out to nearby people of diverse backgrounds. This ought to be especially effective in a diverse place like Seattle. I plan on practicing this.</p>
        </section>
    ];
}

export default new Article();