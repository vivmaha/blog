import {
    IArticleContentQuote,
    IArticleContentHtml,
} from "../../models/IArticleContent";
import { IArticle } from "../../models/IArticle";

export default <IArticle>{
    type: "article",
    title: 'Search Engine Optimization',
    date: new Date(2015, 10, 25),
    id: 'search-engine-optimization-101',
    introduction: {
        preview: "Search engine optimization (SEO) is now a critical ingredient of website design. This post summarizes a paper that discusses a broad range of SEO techniques.",
        extended: <IArticleContentQuote>{
            type: "article-quote",
            quote: "Search engine optimization is often about making small modifications to parts of your website. When viewed individually, these changes might seem like incremental improvements, but when combined with other optimizations, they could have a noticeable impact on your site's user experience and performance in organic search results. ",
            person: "Google's SEO Starter Guide",
        }
    },
    sections: [
        [
            <IArticleContentHtml>{ 
                type: "html",
                content: `
                    <h1>Background</h1>
                    <cite>Killoran, J. B. (2013). How to Use Search Engine Optimization Techniques to Increase Website Visibility. IEEE Trans. Profess. Commun. IEEE Transactions on Professional Communication, 56(1), 50-66.</cite>
                    <p>Search engines aim to rank websites based on authenticity, topicality, quality, and popularity. To do this, they employ a set of rules that have two general classes:</p>                    
                    <dl>
                        <dt>Trust</dt>
                        <dd>an assessment of a site’s authority and reputation</dd>
                        <dt>Relevance</dt>
                        <dd>how well a site topically matches a query</dd>
                    </dl>
                    <p>These rules are known to suffer from  “rich-get-richer” predispositions that perpetuate already highly-ranked sites, and makes it hard for newer or less popular sites to gain rank.</p>
                    <p>The rewards of improving search ranking can entice site owners to engage in questionable “black hat” techniques to trick the search engine into boosting their site’s rank. However, search engines are mature enough to detect such efforts, and may penalize the site with lower rankings or exclusion from the search results.</p>
                    <p>Users tend to stay within the first page of search results, or even just the first few results.</p>
                    <p>Three agents can affect search rank:<p>
                    <ul>
                        <li>Search behavior of users</li>
                        <li>Keywords on the website</li>
                        <li>Inbound links from other websites</li>
                    </ul>
                `
            },
        ], [
            <IArticleContentHtml>{
                type: "html",
                content: `
                    <h1>Search behavior of users</h1>
                    <p>The following user factors affect search ranking<p>
                    <dl>
                        <dt>Click-through rate (CTR)</dt>
                        <dd>If users click on a result often, the result’s ranking will improve.</dd>
                        <dt>Bounce rate</dt>
                        <dd>If users click on a result, but end up returning to the search engine to try other results, the result’s ranking will decrease. This behavior indicates that the user was unsatisfied with the initial result.</dd>
                    </dl>
                    <p>Websites should therefore ensure that their descriptions featured on search engines are compelling to increase the CTR, and accurate to decrease the bounce rate.</p>                    
                `
            },
        ], [
            <IArticleContentHtml>{
                type: "html",
                content: `
                    <h1>Keywords on the website</h1>
                    <p>Use the vocabulary of the intended audience. It is tempting to use the vocabulary of experts, but this isn’t the vocabulary that users will be using to search for the site.</p>
                    <p>Searchers most often include the following in their search:</p>
                    <ul>
                        <li>The kind of service they seek</li>
                        <li>The geographical location</li>
                    </ul>
                    <p>Ensure that you have keywords for these queries.</p>
                    <p>Google Trends shows the popularity of a query over time. Use this to discover the most popular search terms for your topic, and use them as keywords.</p>
                    <p>Google’s Keyword Tool shows related keywords and phrases for keywords. Use it to discover related keywords and phrases to use as keywords on your site.</p>
                    <p>Research the keywords used by your competitors sites, and target those keywords on your own site if relevant.</p>
                    <p>Target some niche keywords where competition is less intense in order to create differentiation and capture a subset of the search audience.</p>
                    <p>Especially effective locations for keywords are:</p>
                    <ul>
                        <li>The &lt;title&gt; HTML tag — a short title that focuses on one or two keywords is best.</li>
                        <li>The URL’s path (separated by hyphens).</li>
                    </ul>
                    <p>Note that ranking is a cumulative calculation, so doing both of the above is even more effective.</p>
                `
            },
        ], [
            <IArticleContentHtml>{
                type: "html",
                content: `
                    <h1>Inbound links from other websites</h1>
                    <p>External websites that link to your site increases your site’s ranking. The quality of these inbound links matter, and include:</p>
                    <ul>
                        <li>The authority of the linking source</li>
                        <li>The topical relevance of the linking source to your site</li>
                    </ul>
                    <p>Strategies to earn inbound links:</p>
                    <ul>
                        <li>Create high-quality, useful content that will induce others to link to it.</li>
                        <li>Provide a useful product or service.</li>
                        <li>Post new, insightful, entertaining information.</li>
                        <li>Maintain a blog with regular, original, interesting posts.</li>
                        <li>Work directly with other sites to get inbound links.</li>
                        <li>Offer to write a guest post on another site in exchange for an inbound link.</li>
                        <li>Join relevant associations that posts links to their members.</li>
                        <li>Engage the media.</li>
                        <li>Optimize for social media.</li>
                        <li>Post content that can be shared via Tweets and Facebook. These should be accompanied with one-button affordances to share.</li>
                        <li>Post content directly to social media sites. Currently Twitter links seem to have the most impact to search rank, followed by Facebook links.</li>
                    </ul>
                `
            },
        ], [
            <IArticleContentHtml>{
                type: "html",
                content: `
                    <h1>Constant Change</h1>
                    <p>Lastly, these techniques are constantly evolving because search engines are constantly changing their algorithms. This forces siteowners to keep up to date with the changes in order to maintain their search ranking.</p>
                `
            },
        ]
    ]
};