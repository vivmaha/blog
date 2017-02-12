import * as React from "react";
import { IArticle } from "../../../models/IArticle";
import { ArticleBlockQuote } from "../../../components/ArticleBlockQuote";

class Article implements IArticle {
    title = 'International UI Design';
    date = new Date(2016, 10, 22);
    id = 'international-ui-design';
    introductionPart1 = <p>The summaries of two papers that explore the design of UI for international audiences.</p>;
    introductionPart2 = 
        <ArticleBlockQuote
            quote="It is arrogant of us to think we can create images that will have the same precise meaning to everyone everywhere."
            person="William Horton"
        ></ArticleBlockQuote>;
    sections = [
        <section>
            <h1>Design for a Global Audience</h1>
            <cite>Quesenbery, W., &amp; Szuc, D. (2012). Global UX: Design and research in a connected world. Waltham, MA: Morgan Kaufmann (Chaper 9)</cite>
            <p>The following steps can globalize your regular UX process:</p>
            <h2>Make globalization a part of your plan</h2>
            <p>Your product should be well designed for each market that you're considering. It should feel as if it was designed by people from that market. Make this part of your success criterion.</p>
            <p>Without leaving your desk, you can get factual information for markets that will identify ways in which your product needs to adapt.</p>
            <p>Internationalization should be a technical deliverable. This ensures that the built product has the standard plumbing required for localization.</p>
            <p>Perform a cultural audit of the experience. Look for both commonalities and differences in visuals and metaphors.</p>
            <p>Obtaining and maintaining localized content can be daunting. Plan for it.</p>
            <h2>Define your global strategy</h2>
            <p>Decide which markets will be targeted, and any associated priorities. This will lead to a focused globalization effort with a higher return of investment.</p>
            <p>Identify the extent to which the product will be adapted individual markets.</p>
            <h3>Little adaptation</h3>
            <p>This approach is suitable if:</p>
            <ul>
                <li>Primary markets are culturally similar</li>
                <li>A specific culture is a part of the product's appeal</li>
                <li>Adaptions are financially prohibitive</li>
            </ul>
            <p>With this approach, your efforts are focused on ensuring that the same product works well everywhere. Disadvantages include a overly compromised design, and the inability to exploit local nuances.</p>
            <h3>Moderate adaptation</h3>
            <p>This approach is suitable if:</p>
            <ul>
                <li>The product is coupled with the local environment</li>
                <li>Global branding is important</li>
                <li>The high level workflow is similar across cultures</li>
                <li>The low level workflow is different across cultures</li>
            </ul>
            <p>With this approach, a central global UX team has to deliver templates that ensure the right balance between consistency and flexibility. These templates must communicate a consistent brand while being flexible enough to perform in every market. Local UX teams use these templates to build locally appropriate products.</p>
            <h3>Heavy adaptation</h3>
            <p>This approach is suitable if the product is:</p>
            <ul>
                <li>Centered around the local environment</li>
                <li>Regulated by local laws</li>
            </ul>
            <p>This allows local teams to optimize the product for their culture at the cost of diluting the global brand.</p>
            <h2>Don't underestimate language</h2>
            <p>There's much more to language than mere translation. There are UI implications, political nuances, legal requirements, local variants, and tonal nuances.</p>
            <h2>Local research</h2> 
            <p>Perhaps most obvious, you have to perform local research to discover all of the nuances of your product's experience in each culture you target.</p>
        </section>,
        <section>
            <h1>Graphics: The Not Quite Universal Language</h1>
            <cite>W. Horton, “Graphics: The Not Quite Universal Language,” in Usability and internationalization of information technology. N. Aykin, Ed Mahwah, NJ: Erlbaum. (Chap. 6)</cite>
            <p>Graphics transcends cultures easier than words. However it isn't as universal as many assume.</p>
            <p>Graphics reduces the cost of expensive and erroneous localization of words. It helps users to understand, especially non-native language users. Globalization has provided a wealth of symbols to use to create effective graphics.</p>
            <p>It is impossible to craft a well designed universal product. It is too expensive to localize a product to every cultural flavor. One pragmatic approach is to first apply universal design as much as possible — globalization — and then localize what is left.</p>
            <p>For the first step, globalization, you must use globally objects and be as literal as possible. If you need to illustrate people keep it abstract, and avoid alienating groups.</p>
            <p>For the second step, localization, a good ballpark is to translate 3% to 5% of your graphics. There are many best-practices you can adopt to make it easy and efficient to localize your graphics.</p>
            <p>This reading is dense with small valuable tips. Summarizing does not do it justice. Refer to the full text if you're ever working on graphics.</p>
        </section>
    ];
}

export default new Article();