import { ArticleContentHtml } from "../../models/IArticleContent";
import Article from "../../models/IArticle";

export default {
  type: "article",
  title: "About",
  date: new Date(2017, 9, 25),
  id: "about",
  introduction: {
    extended: {
      type: "html",
      content: `                
                <p>I'm <a href="https://www.linkedin.com/in/vivmaha">Vivek Maharajh</a> — a Developer and UX Designer.</p>
                <p>I designed and coded this site to:</p>
                <ul>                    
                    <li>Practice UX Design</li>
                    <li>Experiment with modern web dev tools</li>
                </ul>
                <p>Being able to organize my notes on this site was a nice bonus.</p>
                <p><a href="https://github.com/vivmaha/blog">View the code on Github</a></p>
            `,
    } as ArticleContentHtml,
  },
  sections: [],
} as Article;
