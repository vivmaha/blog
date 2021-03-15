import {
  ArticleContentQuote,
  ArticleContentHtml,
} from "../../models/IArticleContent";
import Article from "../../models/IArticle";

export default {
  type: "article",
  title: "Information Architecture",
  date: new Date(2015, 11, 25),
  id: "information-architecture-101",
  introduction: {
    preview:
      "Information Architecture (IA) is focused on making information findable and  understandable. This note summarizes the first few chapters of a book on this topic.",
    extended: {
      type: "article-quote",
      quote:
        "IA done in a vacuum without regard for users  won’t hold up against the light of day. The design must be informed by the  user’s tasks, needs, navigation behavior, and experience",
      person: "L. Rosenfeld, P. Morville, J. Arango",
      personTitle: "Authors of the book summarized in this post",
    } as ArticleContentQuote,
  },
  sections: [
    [
      {
        type: "html",
        content: `
                    <h1>Introduction</h1>
                    <cite>Rosenfeld, L., Morville, P., & Arango, J. (2015). Information architecture: for the web and beyond. Sebastopol (CA): OReilly Media.</cite>
                    <p>Information Architecture (IA) is focused on making information findable and  understandable. IA does this by categorizing, organizing and labeling the  site’s information.</p>
                    <p>IA manifests in multiple affordances on the website, including the header, search (external + internal), and hyperlinks.</p>
                    <p>IA done in a vacuum without regard for users  won’t hold up against the light of day. The design must be informed by the user’s tasks, needs, navigation behavior, and experience.</p>
                    <p>IA must balance the need of the user with the needs of the business.</p>
                `,
      } as ArticleContentHtml,
    ],
    [
      {
        type: "html",
        content: `
                    <h1>Finding</h1>
                    <p>Searching for something you know exists is involves a very different behavior than browsing for the unknown. Scenarios for both behaviors should inform the design of our IA.</p>
                    <p>Information seeking behaviors are complex. The basic building blocks are searching, browsing, and asking. A single information finding session will realistically comprise of a combination of these, and multiple iterations.</p>
                    <p>One great way to learn what your users are looking is search analytics — reviewing the most common search queries on the site.</p>
                `,
      } as ArticleContentHtml,
    ],
    [
      {
        type: "html",
        content: `
                    <h1>Understanding</h1>
                    <p>Each category of websites (bank, store, etc.) has evolved a typology — an AI design that users have come to expect for this type of website. Adhering the typology for online stores will make it easy for customers to understand our environment. Working against a standard structure also offers us an elegant way to differentiate from our competitors; small changes to a standard structure stand out.</p>
                    <p>Users get used to the core structures of a site's IA, and become disoriented when they change. Design the core IA with the future in mind so that it won't have to change often. When changing the core IA, keep your habitual users in mind - they've grown used to it and are likely to be disoriented One way to manage this is by separating parts of the environment that have different rates of change.</p>
                    <p>If you've got subsites that are very different, it is possible that they ought to have very different IA designs. Segmenting these subsites allows you to design the sub-IA that is best for each subsite, instead of imposing a compromised one-size-fits-all design for all your subsites. For example, "ebay Motors" has an IA that is significantly different from the rest of eBay.</p>
                `,
      } as ArticleContentHtml,
    ],
    [
      {
        type: "html",
        content: `
                    <h1>Anatomy of IA</h1>
                    <p>You can approach IA top-down, or bottom-up.</p>
                    <p>The top-down approach starts by asking "What does the user need?", and then by creating a structure that answers this question. This approach was dominant in the earlier days of websites, since most websites were being created from scratch. However dynamic content, and the rise of search engines has led to the prominence of the bottom-up approach. A search-engine user may land directly on your PDP, bypassing your website's homepage, product family pages, etc.</p>
                    <p>The bottom-up approach assumes that your user starts from content in your IA (such as a PDP page), and allows the user to traverse the IA from there (such as related products).</p>
                    <p>Internal search also exposes invisible IA: hand-curated results, and relevancy algorithms are both critical tools thru which users find your website's information.</p>
                    <p>There are four broad categories of IA components. We will dive into these later:</p>
                    <dl>
                        <dt>Organization system</dt>
                        <dd>Categorization of information</dd>
                        <dt>Labeling system</dt>
                        <dd>Representation of information</dd>
                        <dt>Navigation systems</dt>
                        <dd>Traversal of information</dd>
                        <dt>Searching systems</dt>
                        <dd>Directly searching for information</dd>
                    </dl>
                `,
      } as ArticleContentHtml,
    ],
    [
      {
        type: "html",
        content: `
                    <h1>Organization</h1>
                    <p>Organization refers to the grouping of similar items, and the creation of hierarchical relationships between these groups. This is usually represented by the tree diagrams that IA is known for. Organization helps users to locate information, and provides context that helps users to interpret information.</p>
                    <p>There are some common challenges to organization:</p>
                    <dl>
                        <dt>Ambiguity</dt>
                        <dd>Information may belong in multiple groups. With a digital website, we have the leisure of duplicating information into multiple group. However, too much duplication can dilute the value of a classification scheme.</dd>
                        <dt>Heterogeneity</dt>
                        <dd>A collection of objects that are unrelated and incomparable. Unlike homogenous data, which consists of like items and can be classified easily.</dd>
                        <dt>Differences in perspectives</dt>
                        <dd>
                            Site owners and site users have very different perceptions on a website. The site owner may be biased by the hierarchical structures of the corporation, and must ensure that this does not leak into the IA, since the user does not think in terms of the corporate identity.
                            <br/><br/>
                            Various groups of site users will also have different perceptions. You won't be able to craft one IA that is optimized for all of these intended audiences. You may need to provide multiple navigation pathways for important audiences.
                        </dd>
                        <dt>Internal politics</dt>
                        </dd>The IA is intended for users, but it also impacts the internal perception of the importance of various teams. A team is likely to resist an IA in which their work is not highly visible, even if it is in the best interest of the user.</dd>
                    </dl>
                    <p>Organization consists of organization scheme, and organization structure.</p>
                    <h2>Organization Scheme</h2>
                    <p>Organization scheme is the shared characteristics of a group of similar items. Organization scheme is used to define groups, and to order the items that they contain.</p>
                    <h3>Exact schemes</h3>
                    <p>Exact schemes divide information into perfectly defined and mutually exclusive groups. For example, you may organize countries into 26 groups of alphabetical groups. One issue with this scheme is that the user must know exactly what they're searching for (i.e. known-item seeking). All exact schemes share this pitfall. Common exact schemes are alphabetical, chronological, and geographical.</p>
                    <h3>Ambiguous schemes</h3>
                    <p>Ambiguous schemes divide information into categories that may be ambiguous and subjective. These schemes are more difficult to design and maintain, but tend to be more useful than exact schemes especially when the user isn't sure what they're looking for (i.e. exploratory seeking).</p>
                    <p> Here are the most common schemes</p>
                    <ul>
                        <li>Topical (e.g. Amazon's departments).</li>
                        <li>Task-oriented (e.g. Office's ribbon).</li>
                        <li>Audience-specific (e.g. "For work", "For home", "For school").</li>
                        <li>Metaphor (e.g. Your desktop with folders, files & the recycle bin). Metaphors are constraining, and difficult to expand, so this scheme is used sparingly.</li>
                        <li>Hybrid (a mixture of the above schemes). It is dangerous to do this because your user will be presented with groups that overtly overlap. This is usually on the successful when used at a high layer of the organization (e.g. homepage), and restricted to the top set of groups/tasks.</li>
                    </ul>
                    <h2>Organization Structure</h2>
                    <p>Organization structure is the relationships between the groups defined by the above organization scheme. It dictates the primary ways in which users can navigate. We will discuss 3 major organization structures that can be used in isolation, or with each other:</p>
                    <ul>
                        <li>Hierarchy — a top-down approach</li>
                        <li>Database model — a bottom-up approach</li>
                        <li>Hypertext</li>
                    </ul>
                    <h3>Hierarchy — a top-down approach</h3>
                    <p>These are ubiquitous and successful because humans have grown familiar with hierarchies. This allows Information Architects to design in a familiar medium, and end-users to consume the familiar hierarchical structure.</p>
                    <dl>
                        <dt>Ambiguity</dt>
                        <dd>when designing the hierarchy, strive for mutually exclusive schemes. Avoid cross listing an item under multiple groups. Realistically this will not be possible; a controlled number of exceptions may be beneficial but going overboard can render the hierarchy meaningless.</dd>
                        <dt>Breadth & Depth</dt>
                        <dd>
                            Excessive breadth is difficult to scan, and users are shocked with a lack of content as they navigate deeper into the hierarchy.
                            <br/><br/>
                            Excessive depth leads to an inordinate amount of navigation to locate information, and many users will simply leave your website.
                            <br/><br/>
                            When designing a new environment, lean towards broad-and-shallow which allows you to expand without major restructuring.
                        </dd>
                    </dl>
                    <h3>Database model — a bottom-up approach</h3>
                    <p>If your information is stored in a database, then there is a rich metadata schema already associated with it. Take advantage of this metadata to enable the automatic generation of indices, see also links, fielded searching, and advanced filtering and sorting of search results.</p>
                    <h3>Hypertext</h3>
                    <p>This refers to a highly ad-hoc and nonlinear structure. This provides flexibility for useful relationships between items and groups in the hierarchy. However, if a user primary uses hypertext for navigation, the user doesn't get a feel for the lay of the land, and doesn't develop a mental model of the site's structure. For this reason, hypertext should rarely be the primary organization structure, but it can be complementary.</p>
                `,
      } as ArticleContentHtml,
    ],
    [
      {
        type: "html",
        content: `
                    <h1>The Book</h1>
                    <p>
                        This is a summary of the first half of the book. The book continues to go into more detail than I needed. If you need those details, I highly recommend giving it a read:
                        
                        <a href="http://shop.oreilly.com/product/0636920034674.do">Information Architecture — For the Web and Beyond, by O'Reilly Media</a>
                    </p>
                    
                `,
      } as ArticleContentHtml,
    ],
  ],
} as Article;
