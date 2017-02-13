import * as React from "react";
import { IArticle } from "../../../models/IArticle";
import { ArticleBlockQuote } from "../../../components/ArticleBlockQuote";

class Article implements IArticle {
    title = 'International Research';
    date = new Date(2016, 11, 6);
    id = 'international-research';
    introductionPart1 = "The summaries of two papers that explore User Research for international audiences.";
    introductionPart2 = 
        <ArticleBlockQuote
            quote="A simple report with data won't do. This isn't just user success percentages or task analysis: global research reports have to communicate the nuance of cultural similarities and differences."
            person="Global UX (Chapter 8)"
        ></ArticleBlockQuote>;
    sections = [
        <section>
            <h1>Bringing It Home</h1>
            <cite>Quesenbery, W., &amp; Szuc, D. (2012). Global UX: Design and research in a connected world. Waltham, MA: Morgan Kaufmann (Chaper 8)</cite>
            <h2>Collecting you research results</h2>
            <p>Each researcher had a unique part of the journey, which will lead to unique interpretations. Converge these interpretations into a shared cohesive understanding.</p>
            <p>Create daily conclusions of your research and share this with the rest of the research team. This will improve the next day's research, and make it easier to create the final conclusion.</p>
            <p>Flesh out the conclusion before splitting up to work individually, especially if the team is geographically spread. The initial phase of the conclusion demands tight collaboration.</p>
            <h2>Communicating your research results</h2>
            <p>Engage the audience in activities that immerses them into the research material.</p>
            <p>Allow the audience to browse the research material and their own pace, and be there to discuss their thoughts.</p>
            <h2>Communication mediums</h2>
            <p>Photographs are great at capturing feelings that would be difficult to verbalize. You do not need a professional photographer, anyone on the research team can capture telling images. Sometimes the subject of the image may not be the subject of your photograph.</p>
            <p>Videos are compelling, but they're time consuming to create, share, and view.</p>
            <p>Sketches allow you to add intentional emphasis to certain elements. Like photography, it does not take specialized skill to create an effective sketch.</p>
            <p>Personas allow you to present a detailed description of users. This protects the privacy of your research participants. They reveal differences between your users. They allow the product team to think of new solutions for unmet user needs.</p>
            <h2>Follow thru</h2>
            <p>Ensure that the results are incorporated into the product. Refer back to the research during the ideation phase.</p>
        </section>,
        <section>
            <h1>TODO...</h1>
            <cite>TODO</cite>
        </section>
    ];
}

export default new Article();