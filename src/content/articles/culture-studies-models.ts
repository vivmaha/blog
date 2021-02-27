import {
  ArticleContentQuote,
  ArticleContentHtml,
} from "../../models/IArticleContent";
import Article from "../../models/IArticle";

export default {
  type: "article",
  title: "Cultural Awareness",
  date: new Date(2016, 9, 8),
  id: "cultural-awareness",
  introduction: {
    preview:
      "Global design demands cultural awareness. In this article, I look at techniques for developing cultural awareness.",
  },
  articleSetId: "global-ux",
  sections: [
    [
      {
        type: "html",
        content: `<p>Global design demands cultural awareness. In this article, I look at techniques for developing cultural awareness.</p>`,
      } as ArticleContentHtml,
      {
        type: "article-quote",
        quote:
          "Your company's culture and your company's brand are really just two sides of the same coin. The brand may lag the culture at first, but eventually it will catch up. Your culture is your brand.",
        person: "Tony Hsei",
        personTitle: "Zappos",
      } as ArticleContentQuote,
    ],
    [
      {
        type: "html",
        content: `
                    <h1>The Concept of Culture</h1>
                    <cite>Minkov, “The Concept of Culture”, Cross-Cultural Analysis (LA, London, Delhi: Sage, 2012): 9-17.</cite>
                    <p>Culture is too complicated to define, but too important to ignore. There is wide variation in definitions across scholarly circles. Notably, there is disagreement between which aspects are part of culture, and which are extraneous. For example, is the wealth of a nation a part of its culture? Pick the definition that best fits your purpose and be sure to communicate this with your findings.</p>
                    <p>When comparing cultures, you can use statistics control for objective variances in populations, such as age. The value of doing this depends on the purpose of your comparison.</p>
                    <p>Classifications of definitions of Culture:</p>
                    <dl>
                        <dt>Subjective vs. Objective</dt>
                        <dd>We can view culture as an intrinsic quality of people (subjective), or as the artifacts created by people (objective). These artifacts can be physical, such as buildings, and also intangible, such as marriage structures.</dd>
                        <dt>Behaviors vs. Meanings</dt>
                        <dd>We can view culture as behaviors exhibited by a group, or by the meanings of those behaviors. The latter view has gained popularity.</dd>
                        <dt>Independent vs. Human</dt>
                        <dd>These classifications disagree on whether culture should be studied in context of humans, or as an independent phenomenon.</dd>
                        <dd>The disagreement is not about the uniqueness of culture to mankind. It is about whether humans are capable of studying it independently from human contexts.</dd>
                    </dl>
                `,
      } as ArticleContentHtml,
    ],
    [
      {
        type: "html",
        content: `
                    <h1>Culture and UX</h1>
                    <cite>Quesenbery, W., &amp; Szuc, D. (2012). Global UX: Design and research in a connected world. Waltham, MA: Morgan Kaufmann (Chapter 3)</cite>
                    <p>Culture is best understood comparatively.</p>
                    <p>Culture changes more slowly than other aspects that we design for (eg. governance, infrastructure, commerce &amp; fashion).</p>
                    <p>Strong cultural factors:</p>
                    <dl>
                        <dt>Nationality</dt>
                        <dd>Where someone grew up. The time period is also important. Be mindful of nationalities with a vast array of sub-cultures, the diluting effect of globalization, and the possibility that individual interests can overrule the effect of national culture.</dd>
                        <dt>Technology</dt>
                        <dd>What technological environment someone grew up in.</dd>
                        <dt>Company</dt>
                        <dd>Companies, or industries, can develop strong cultures.</dd>
                    </dl>
                    <p>Language and cultural issues easily go by undetected by outsiders. Identifying and solving these require an intentional effort. This effort should be phased — use cheap research methods to weed out the bulk of issues, then use extensive methods for completeness.</p> 
                    <p>Some sources of UX issues are easier to predict than others. In increasing order of difficulty: task completion, infrastructure, legal, market, language, and finally, culture.</p>
                    <p>Hofstede has five dimensions for classifying cultures. It is the most popular model for doing this, but has been met with mixed reactions. Regardless of its accuracy, it is a good mental framework to build upon.</p>
                    <p>Language will be just as nuanced as culture, and you'll have to understand them both for a successful design.</p>
                `,
      } as ArticleContentHtml,
    ],
    [
      {
        type: "html",
        content: `
                    <h1>Building Your Cultural Awareness</h1>
                    <cite>Quesenbery, W., &amp; Szuc, D. (2012). Global UX: Design and research in a connected world. Waltham, MA: Morgan Kaufmann (Chapter 4)</cite>
                    <p>The following attitudes are helpful in developing global awareness:</p>
                    <dl>
                        <dt>Constant challenges</dt>
                        <dd>Embrace new and foreign concepts.</dd>
                        <dt>Curiosity</dt>
                        <dd>Approach new experiences with naivete</dd>
                        <dt>Humility</dt>
                        <dd>Learn from others. Do not assume your way is best.</dd>
                    </dl>
                    <p>Immersion refers to a deep understanding of another's perspective. It goes beyond being able to objectively describe another culture. It involves being able to actually experience that culture like a local. Immersion allows you to accurately interpret User Research, and effectively communicate your findings. The following actions are helpful in developing immersion:</p>
                    <dl>
                        <dt>Time</dt>
                        <dd>Spending an extended amount of time in a place. It is unclear if this is months, years, or a lifetime.</dd>
                        <dt>Local customs</dt>
                        <dd>Follow and respect the local customs. Don't hang out with expats. Go far from the city center if needed.</dd>
                        <dt>Language</dt>
                        <dd>Learn the language. Aside from the utility of easy communication, the language reveals cultural subtleties.</dd>
                        <dt>Proxy</dt>
                        <dd>As a last resort, if you're unable to travel, you can get to know someone who originates from that culture, or even someone who has been thru the immersion process in that culture. Be mindful that the person's experiences may be reflective of an older time period of that culture.</dd>
                    </dl>
                `,
      } as ArticleContentHtml,
    ],
  ],
} as Article;
