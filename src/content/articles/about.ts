import {
    IArticleContentQuote,
    IArticleContentHtml,
} from "../../models/IArticleContent";
import { IArticle } from "../../models/IArticle";

export default <IArticle>{
    type: "article",
    title: 'About',
    date: new Date(2017, 9, 25),
    id: 'about',
    introduction: {
        extended: <IArticleContentHtml>{ 
            type: "html",
            content: `                
                <p>I'm <a href="https://www.linkedin.com/in/vivmaha">Vivek Maharajh</a> — a Developer and UX Designer.</p>
                <p>I built this site for two main reasons:</p>
                <ul>                    
                    <li>To practice my UX Design on a website, and</li>
                    <li>To stay fresh with modern web dev tools.</li>
                </ul>
                <p>Having a nice place to organize my notes was just a bonus.</p>
            `
        },
    },
    sections: [
        [
            <IArticleContentHtml>{ 
                type: "html",
                content: `
                    <h1>Development</h1>
                    <p>Todo — Talk about the dev story behind this site.</p>
                `
            },
        ], [
            <IArticleContentHtml>{
                type: "html",
                content: `
                    <h1>Design</h1>
                    <p>Todo — Talk about the design story behind this site.</p>
                `
            },
        ]
    ]
};