import * as React from "react";
import { IArticle } from "../../../models/IArticle";
import { ArticleBlockQuote } from "../../../components/ArticleBlockQuote";

class Article implements IArticle {
    title = 'Culture and UX (Part 2)';
    date = new Date(2016, 10, 16);
    id = 'cultural-dimensions-design';
    introductionPart1 = "The summaries of three papers that explore the dimensions of culture, and their impact on design.";
    introductionPart2 = 
        <ArticleBlockQuote
            quote="Once developers recognize that their own patterns of rationality are not universal, there is the possibility of designing new interfaces with more appeal to those voluntarily on the opposite side of the digital divide."
            person="Emilie W. Gould"
            personTitle="Rensselaer Polytechnic Institute"
        ></ArticleBlockQuote>;
    sections = [        
        <section>
            <h1>The Ethnic Theory of Plane Crashes</h1>
            <cite>Gladwell, Malcolm: “The Ethnic Theory of Plane Crashes” in Outliers. New York: Little, Brown andCompany, 2008. Chapter 7, pp. 177-223</cite>
            <p>It is tempting design with the happy path in mind, however this can lead to failures under extenuating circumstances.</p>
            <p>This reading made me wonder if users see UI as their pilot (superior) or first officer (inferior)? How much mitigation should UI use to communicate? This probably depends on the tolerance to error of the task. The designer must be mindful of this and balance comfortable with error avoidance.</p>
            <p>We can generalize populations, but we should expect individuals within these populations to exhibit variance.</p>
            <p>Culture emerges from hundreds of years of history based on things such as political structures, religions traditions, languages, food, architecture, and literature.</p>
            <p>Western culture is Transmitter oriented — it is the responsibility of the speaker to ensure communication is successful. Asian culture is Receiver oriented — it is the responsibility of the listener. Receiver oriented languages do not work well in extenuating circumstances because the listener does not have the attention needed to read between the lines.</p>
            <p>If cultural values are innately unsuited for a task, look for ways to suppress the corresponding cultural behaviors. With training, individuals can change their behaviors from their cultural norms.</p>
            <p>It is tempting to ignore cultural differences for fear of offending someone. However ignoring our differences, our unique strengths and weaknesses, can lead to unsuitable designs.</p>
        </section>,
        <section>
            <h1>Synthesizing the Literature on Cultural Values</h1>
            <cite>Aykin, N. (2005). Usability and internationalization of information technology. Mahwah, NJ: Lawrence Erlbaum. (Chap. 4 Gould, Emilie)</cite>            
            <p>It is prohibitively costly to custom-tailor a product to every single culture. Instead, we classify similar groups of cultures and target these.</p>
            <p>The field of cultural anthropology is unsuitable for informing HCI because:</p>
            <ul>
                <li>Results are not in a standardized cross-cultural format, which makes it difficult to convert a single experience across cultures.</li>
                <li>They do not identify which differences are important, which prevents the designer from cheaply addressing the important differences.</li>
                <li>Findings are oriented in comparison between the culture and the researcher.</li>
                <li>It has historical ties to imperialistically biased research.</li>
            </ul>
            <p>The field of intercultural communication is suitable for informing HCI because:</p>
            <ul>
                <li>Results are comparative in nature, which makes it easy to morph the same product design across cultures.</li>
                <li>It identifies the critical variables that need to be addressed, allowing the designer to make targeted changes.</li>
                <li>In order to understand another's culture, your must first understand your personal cultural afflictions.</li>
            </ul>
            <p>Hall studied the following dimensions of communication within cultures: time, space, and context. The implications for web design include:</p>
            <ul>
                <li>Use of color.</li>
                <li>Density of text vs. image.</li>
                <li>Linear vs. ad-hoc task flow.</li>
                <li>Proving context, such as branding, or social awareness.</li>
            </ul>
            <p>Stewart and Bennett explored cultural differences in the context of various levels of perception: innate, patterns, and metaphors. This analysis implies that application localization cannot merely consist of textual translations, but should also consider higher levels of design such as page structure and imagery connotations. A simple example of this is horizontally flipping the interface for let-to-right cultures instead of merely translating the text.</p> 
            <p>Codon and Yousef explored a non-exhaustive set of twenty five value orientations under the intersecting categories of nature, self, and society. Implications to HCI include application defaults, degree of persuasion, representation of users to each other, and even the representation of the application's culture to users.</p>
            <p>Hofstede explored four cultural dimensions across a very wide number of countries. He later added a fifth dimension for a subset of countries. These values are widely criticized, but also widely used. His data makes it very straightforward to examine your application in the context of another set of cultural dimensions in order to adapt it for suitability in another target market.</p> 
            <p>Triandis approached this topic from social psychology, and redefined many existing notions, including Hofstede's dimensions. The open-minded cross-cultural approach that Triandis advocated would serve HCI well — we should ensure that our field is not building on a western-centric foundation. HIs work also suggests that more effort should be placed in developing trust from users from collectivist cultures.</p>
            <p>Gudykunst combined intra and inter cultural communications theory. When people first meet, they try to find similarities in background, then as the relationship developers, they explore personal traits, and the need for similarity decreases. His work also explored the multiple identities that persons adopt for subgroups that they belong to. This work can be applied to the first meeting between a user and software being designed by providing sufficient similarities for users to attach to and being attuned to when the user has gained sufficient trust in the system.</p>
        </section>,
        <section>
            <h1>Culural issues in HCI</h1>
            <cite>Isabela Gasparini , Marcelo S. Pimenta , José Palazzo M. De Oliveira, Vive la différence!: a survey of cultural-aware issues in HCI, Proceedings of the 10th Brazilian Symposium on Human Factors in Computing Systems and the 5th Latin American Conference on Human-Computer Interaction, October 25-28, 2011, Porto de Galinhas, Pernambuco, Brazil</cite>
            <p>Internationalization instills flexibility into the technical  and design infrastructure, so that it can be cheaply adapted to various cultures.</p> 
            <p>Localization adapts the product for a specific culture. Is successful, it will feel as if the product was developed in that culture. This goes beyond translating text — it includes changing metaphors and adapting the visual design.</p>
            <p>With globalization, companies providing software must localize for more and more markets. At the same time, more and more individuals are becoming global citizens via physical travel, or media that crosses cultural bounds.</p>
            <p>In High PDI cultures, websites may focus on the organization. In low PDI cultures, websites may focus on the users of the organization.</p> 
            <p>Tables 2–6 of this reading are a great cheat sheet for adapting a website based on Hofstede's dimensions.</p>
        </section>
    ];
}

export default new Article();