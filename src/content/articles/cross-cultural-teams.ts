import {
  ArticleContentQuote,
  ArticleContentHtml,
} from "../../models/IArticleContent";
import Article from "../../models/IArticle";

export default {
  type: "article",
  title: "Cross-Cultural Teams",
  date: new Date(2016, 10, 25),
  id: "cross-cultural-teams",
  introduction: {
    preview:
      "Working on a global product is usually accompanied with a global workforce. This post explores the dynamics of diverse work spaces.",
  },
  articleSetId: "global-ux",
  sections: [
    [
      {
        type: "html",
        content: `<p>Working on a global product is usually accompanied with a global workforce. This post explores the dynamics of diverse work spaces.</p>`
      },
      {
        type: "article-quote",
        quote:
          "The Japanese have a saying: ‘The nail that sticks up must be hammered down,’ implying that individualism must be crushed and frustrated. This isn’t so — individual effort and initiative are appreciated in Japanese business — but they need to be coordinated in a team effort. This means that a lot of time is spent in collective discussion, and decisions are made through the process known as nemawashi (binding the roots).",
        person: "Barry Tomalin",
        personTitle: "Lecturer in Cultural Awareness",
      } as ArticleContentQuote,
    ],
    [
      {
        type: "html",
        content: `
                    <h1>Effective Global Teams</h1>
                    <cite>Global UX, Chapter 6, “Effective Global Teams,” pp. 99-199</cite>
                    <p>There are numerous ways to structure a global team. You may have a central location within the headquarters, or multiple branches in key markets, or even a team that is spread thinly across many different countries. It helps to hire designers who are passionate about moving to new cultures and embracing them.</p>
                    <p>Time zones adds unavoidable overhead into global communications. There is no way to completely solve this but there are ways to mitigate it:</p>
                    <ul>
                        <li>Prefer personal communication such as phone calls and video calls.</li>
                        <li>Include remote teams in all strategic.</li>
                        <li>Share the burden of joining meetings at off-hours.</li>
                        <li>Physically meet before starting work. This may be expensive, but it helps to make future collaboration much more efficient.</li>
                        <li>Be aware of cultural differences amongst teammates. Use suitable teammates as cultural bridges.</li>
                        <li>Intentionally build cross-cultural knowledge of designers. Integration within the local community helps. Integration with the global UX community also helps, such as conferences.</li>
                    </ul>
                    <p>Diverse teams tend to be more effective at innovation, perhaps because the diversity allows them to tackle problems from many perspectives. This makes the overhead described above worth it.</p>
                `,
      } as ArticleContentHtml,
    ],
    [
      {
        type: "html",
        content: `
                    <h1>Teams, motivation and feedback</h1>
                    <cite>Tomalin, B. (n.d.). 8. In The World's Business Cultures: And How to Unlock Them (2nd ed., pp. 115-127). Thorogood.</cite>
                    <p>Cultures have accompanying team ethics. If your team members come from different cultures, there will be a mix of team ethics, which may not mix nicely.</p>
                    <p>Team ethics can be deconstructed as follows:</p>
                    <dl>
                        <dt>Team selection</dt>
                        <dd>By expertise, seniority, loyalty, or adaptability.</dd>
                        <dt>Teamwork</dt>
                        <dd>Initiative versus consensus. Freedom to encroach outside your area of ownership.</dd>
                        <dt>Problem solving</dt>
                        <dd>Diving into identifying a solution, versus getting a good understanding for the problem, versus getting a good understanding of the root cause of the problem.</dd>
                        <dt>Motivation</dt>
                        <dd>Money,  Status, Security, Power, and Fun.</dd>
                        <dt>Feedback</dt>
                        <dd>Private versus public. Email versus in-person. Blunt versus mitigated.</dd>
                    </dl>
                `,
      } as ArticleContentHtml,
    ],
  ],
} as Article;
