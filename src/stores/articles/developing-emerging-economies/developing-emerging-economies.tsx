import * as React from "react";
import { IArticle } from "../../../models/IArticle";
import { ArticleBlockQuote } from "../../../components/ArticleBlockQuote";

class Article implements IArticle {
    title = 'Design and Emerging Economies';
    date = new Date(2016, 11, 19);
    id = 'developing-emerging-economies';
    introductionPart1 = "The summaries of four papers that explore design for emerging economies.";
    introductionPart2 = 
        <ArticleBlockQuote
            quote="The usual approach is to strip the product of features until a semblance of affordability is attained. The trouble is that the emerging consumer, for whom every act of discretionaryconsumption is an act of sacrificing something essential, is looking to be seduced rather than patronized"
            person="Santosh Desai"
            personTitle="FutureBrands CEO"
        ></ArticleBlockQuote>;
    sections = [        
        <section>
            <h1>Engineering Reverse Innovations</h1>
            <cite>Govindarajan, A. W. (2016, November 03). Engineering Reverse Innovations. Retrieved February 18, 2017, from https://hbr.org/2015/07/engineering-reverse-innovations</cite>
            <p>Innovation typically focuses on developed markets, and successful products are later adapted for emerging markets. In reverse innovation, this order is reversed.</p>
            <p>Reverse innovation often fails because the innovation team is experienced with consumers from developed markets, and unable to produce designs that are suitable for consumers from emerging markets.</p>
            <p>Here are some tips to solve this problem:</p>
            <ul>
                <li>Do not set a target price of 50% for an equivalent product in the developed world. This is still too high for most consumers in emerging markets, and the few that can afford it will likely want the high end 100% price version. Aim for a 10% price target instead.</li>
                <li>Do not start with an existing product and look for a suitable market. Instead, start with a market, invest time in understanding the needs of that market, and then design a new solution to meet those needs.</li>
                <li>Do not focus on cost when eliminating features. Consider the features of the target market, and take advantage of the freedoms that they afford.</li>
                <li>Perform thorough technical feasibility analysis.</li>
                <li>Test the idea with all stakeholders — This includes the user, the purchaser, and any organization that will be administering the product.</li>
            </ul>
            <p>Emerging markets are gaining dominance of the global market. Companies ought to invest in expertise in emerging markets in order to ensure future relevance. One thing that makes this easy is the abundance of cheap engineers in those markets.</p>
        </section>,
        <section>
            <h1>Global Product Design</h1>
            <cite>Sathikh, P. M., &amp; Kumar, S. A. (2009). Transitive Culture: How ‘Global’ Product Design is Changing User Behavior. 3rd International Conference on Integrity, Reliability and Failure.</cite>
            <p>In globalization, products are designed by the developed world and sold into developing countries as is. The result is similar to colonization, which which the dominant culture infected other cultures. This paper examines this cultural effect.</p>
            <p>When a local culture adopts new technology designed for a foreign culture, locals are forced to adapt their behaviors to use the new technology. These new behaviors lead to a change in the culture, which is called transitive culture.</p>
            <p>Advocates for globalization laud the efficiency of design and production if we treat the world as homogeneous. In fact, they suggest using homogeneous products to train the world to be homogeneous. This approach focuses on the similarities of cultures. However, this overlooks the deep emotional differences that affect usage and purchase decisions, and it also wrongly assumes that differences in cultures can be dissolved quickly.</p>
            <p>Interesting examples:</p>
            <dl>
                <dt>India</dt>
                <dd>Washing machines used to make lassi, a local mango-yogurt</dd>
                <dt>India</dt>
                <dd>Mobile phones used to facilitate or even replace traditional rituals</dd>
                <dt>India</dt>
                <dd>Mobile phones and internet downloads used for movies and shows</dd>
                <dt>Japan</dt>
                <dd>Mobile phones used to create a new form of literature, Ketai</dd>
                <dt>Uganda</dt>
                <dd>Mobile phones for transferring airtime as a currency</dd>
            </dl>
            <p>The authors believe that new technologies will impact the behavior of consumers, but not their core cultural assumptions.</p>
        </section>,
        <section>
            <h1>The Washing Machine that Ate my Sari</h1>
            <cite>Apala Lahiri Chavan , Douglas Gorney , Beena Prabhu , Sarit Arora, COVER STORY The washing machine that ate my sari---mistakes in cross-cultural design, interactions, v.16 n.1, January + February 2009</cite>
            <p>The global market has developed into a lucrative size. This is due to emerging markets — those that have middle class that is significant enough to attract exports from developed markets.</p>
            <p>Designing a product for an emerging market requires a deep understanding of the culture, and this is a demanding endeavor. A practical and effective solution is to employ local designers who already have local understanding.</p>
            <p>The price segmentation will be very different from those in developed countries. Aligning with a natural segmentation is critical for success. In addition to price segments, focus on what features are important, rather than what features can be eliminated to lower the price.</p>
            <p>Understanding the constraints and capabilities of the local infrastructure is also crucial. This includes payment methods, internet connectivity, and power reliability.</p>
            <p>The design methodologies that we're used to were developed and tested mainly in developed countries. They may not be effective in emerging markets. Designers have to be flexible and creative and adapt design methodologies to ensure effectiveness.</p>
        </section>,
        <section>
            <h1>How P&amp;G brought the diaper revolution to China</h1>
            <cite>Frazier, M. (2010, January 07). How P&amp;G Brought the Diaper Revolution to China. Retrieved February 18, 2017, from http://www.cbsnews.com/news/how-pg-brought-the-diaper-revolution-to-china</cite>
            <p>P&amp;G entered the disposable diaper market in China in 1998. No one in China used disposable diapers at the time. P&G's strategy was to create a cheap version of the US diaper. This failed. The diaper was inferior in quality. Customers in both developing and developed countries avoid inferior quality.</p>
            <p>P&amp;G updated their strategy. They kept cost low by using new technology, and more efficient production mechanisms. They found out that Chinese mothers craved sleep,  and they delivered a campaign that targeted this. They also played on the academic development of the baby, which is also valued in Chinese culture. This strategy succeeded.</p>
        </section>
    ];
}

export default new Article();