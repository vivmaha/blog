import * as React from "react";
import { IArticle } from "../../../models/IArticle";
import { ArticleBlockQuote } from "../../../components/ArticleBlockQuote";

class Article implements IArticle {
    title = 'Global User Research';
    date = new Date(2016, 10, 6);
    id = 'global-user-research';
    introductionPart1 = "Global User Resarch is hard. In this post, we look at tips from seasoned veterans for conducting a insightful global user study, and delivering compelling results to the product team."
    introductionPart2 = 
        <ArticleBlockQuote
            quote="Let them teach you"
            person="Global UX (Chapter 7)"
        ></ArticleBlockQuote>;
    articleSetId = 'global-ux';
    sections = [
        <section>
            <h1>Research in the Field</h1>
            <cite>Global UX, Chapter 7, “Research in the Field,” pp. 121-53.</cite>            
            <p>In this chapter, we learn to successfully execute global research.</p>
            <h2>Goals</h2>
            <p>Set explicit goals to ensure an actionable deliverable. If the project is long, create milestones and corresponding goals.</p>
            <p>Select cultural regions to research based on:</p>
            <ul>
                <li>existing market share</li>
                <li>target market share</li>
                <li>obtaining data from a diverse set of cultures</li>
            </ul>
            <p>Field studies are more expensive and time-costly than lab studies, however they are the best tool for discovering deep cultural insights.</p>
            <h2>Logistics</h2>
            <p>Use your goals to determine which regions you need to travel to. Note that you may be able to use technology to successfully deliver some goals without physical travel. This approach allows you to objectively request travel provisions from your company.</p>
            <p>Pick just enough participants to generate accurate results. Picking more than this will limit your time per participant, and lead to lower quality results. Be prepared for clients or companies who do not understand this trade off and ask you to inflate the number of participants arbitrarily.</p>
            <p>Adjust your logistical requirements for different cultural regions. For example, attitudes towards tardiness and honest communication will vary across cultural regions. If these are unaccounted for, you expose your study to the risk of failure.</p>
            <p>Allocate time for data analysis.  This is especially necessary if analysis is performed by a diverse set of researchers, each of which bringing their inherent cultural biases.</p>
            <p>Start with an activity that immerses you into the culture. This will create some cultural awareness that will help you to interpret the data accurately.</p>
            <h2>Methodology</h2>
            <p>The following factors are effective in exposing deep and accurate insights:</p>
            <ul>
                <li>Flexibility in methodology execution</li>
                <li>Observational, or open-ended methodologies</li>
                <li>Performing research at the start of the product design cycle</li>
                <li>Triangulating results between a diverse set of methodologies</li>
                <li>Performing research in a real environment</li>
            </ul>
            <p>Consult existing research before performing you own research. If you work for  large company, relevant studies may already exist and can help you improve your study.</p>
            <p>Avoid focus groups. The inaccurate effects of group think occur. The environment is also far from real, so accuracy suffers again.</p>
            <p>Remote methods lack immersion and will not be as effective at exposing deep insights. However it will cheaply allow your data to draw from a very diverse set of participants.</p>
            <h2>Team</h2>
            <p>The most effective global researchers are those that are passionate about learning the target culture.</p>
            <p>Including non-researchers builds empathy for the users, the research study, and research in general. This helps ensure that the research results are embraced and incorporated into the product. These principles also extend to including local representatives in a multi-national company.</p>
            <h2>Field Preparation</h2>
            <p>Question your inherent assumptions in order to widen the breath of your interpretation.</p>
            <p>Consult local resources before travelling to the field:</p>
            <ul>
                <li>Revisit your own research history and life experiences</li>
                <li>Interview friends from the target culture</li>
                <li>Dive into existing literature for factual information</li>
            </ul>
            <p>Ensure that all researchers are prepared.</p>
            <h2>Field Work</h2>
            <p>Do not fall into the trap of quantity over quantity. A realistic pace, and sufficient down time will ensure quality research.</p>
            <p>Field work is conducive to developing camaraderie within the research crew.</p>
            <h2>Easy Points of Failure</h2>
            <ul>
                <li>Researchers who have not been trained in getting participants to open up. This skill rarely comes naturally.</li>
                <li>Recruitment materials that are misunderstood.</li>
                <li>Non-expert translations.</li>
            </ul>
        </section>,
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
        </section>        
    ];
}

export default new Article();