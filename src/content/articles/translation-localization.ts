import {
  ArticleContentQuote,
  ArticleContentHtml,
} from "../../models/IArticleContent";
import Article from "../../models/IArticle";

export default {
  type: "article",
  title: "Language and Power",
  date: new Date(2016, 10, 13),
  id: "language-power",
  introduction: {
    preview:
      "Localization and translation are standard for global products. This post explores power dynamics between languages that translators should be mindful of.",
    extended: {
      type: "article-quote",
      quote:
        "However great our future writers may be, their fame will never succeed in crossing beyond our borders … And so I would like to suggest to the public spirited men of the world that they engage themselves in the writing of English … In this day and age, it is self-evident that a man with great ambitions should study English writing. Study it, and strive, by using the language, to make his glory shine abroad. There is nothing great about a fame solely garnered in the context of this pathetic string of islands",
      person: "Editorialist",
      personTitle: "Yomiuri Shimbun (Japanese daily newspaper)",
    } as ArticleContentQuote,
  },
  articleSetId: "global-ux",
  sections: [
    [
      {
        type: "html",
        content: `
                    <h1>How Many Words Do We Have For Coffee</h1>
                    <cite>David Bellos, Is That a Fish in Your Ear? Faber and Faber, NY, 2011 (Chapter 14)</cite>
                    <p>With few exceptions, today's languages exhibit strong signs of a shared genealogy.</p>
                    <p>Von Humboldt concluded that different languages lent themselves to different mental frameworks. Languages could not be perfectly translated because they evolved to support different mental frameworks. Initially scholars believed that foreign languages were primitive and supported inferior thought. Notably, the inability of abstract thought.</p>
                    <p>Edward Sapir changed this view, by asserting that languages were all equal, and evolved to support their unique environments. Sapir showed that primitive languages were just as complex as civilized languages, albeit in different aspects.</p>
                `,
      } as ArticleContentHtml,
    ],
    [
      {
        type: "html",
        content: `
                    <h1>Bibles and Bananas</h1>
                    <cite>David Bellos, Is That a Fish in Your Ear? Faber and Faber, NY, 2011 (Chapter 15)</cite>
                    <p>Power differences between populations can affect how their languages are translated. Power differences change over time and a corresponding change in translation mechanics is to be expected.</p>
                    <p>When translating to a more powerful language, the translated content is adapted to conform to the more powerful language. When translating to a less powerful language, the target language is adapted to conform to the material being translated. Over time, this leads to the introduction of artifacts from more powerful languages into less powerful languages.</p>
                    <p>The translation of the Bible was a notable exception to this rule. Eugene Nida, who oversaw many translations of the Bible, was interested in getting the message of the Bible to masses of new populations, and this would only be possible if the text was easily understood by the masses.</p>
                    <p>When translating a concept that does not exist in the target language, there are various approaches:</p>
                    <dl>
                        <dt>Foreignism</dt>
                        <dd>Add new words to the target language</dd>
                        <dt>Calque</dt>
                        <dd>Combine words that already exist in the target language</dd>
                        <dt>Semantic Expansion</dt>
                        <dd>Reuse an existing word from the target language</dd>
                        <dt>Cultural Substitution</dt>
                        <dd>Change the source to be translatable while preserving intent</dd>
                    </dl>
                    <p>Translators who speak the target language since childhood can pick up on unintended consequences in translations that other translators will easily miss.</p>
                    <p>Nida's approach is great for translation for informal communication. However, it does not work well in scenarios that demand accuracy, such as scholarly endeavors.</p>
                `,
      } as ArticleContentHtml,
    ],
    [
      {
        type: "html",
        content: `
                    <h1>Global Flows</h1>
                    <cite>David Bellos, Is That a Fish in Your Ear? Faber and Faber, NY, 2011 (Chapter 19)</cite>
                    <p>Translations regularly happen between about 50 languages. These are read by a large proportion of the world — not necessarily because they read it natively, but merely because it belongs to this list.</p>
                    <p>Translations per language are not proportional to the number of speakers of that language. It is associated with power relationships, but often in surprising ways. English is currently dominant. Most translations are from English into other languages, and very few translations into English itself. This is different from the dominance that Latin once enjoyed, where there was no need for translation since anyone with ambition was expected to learn Latin.</p>
                    <p>After English, French and German dominate. Most publishers are from Britain, the US, France, and Germany. </p>
                    <p>Many people publish in English even if it is not their native tongue. They see this as a prerequisite for global adoption of their work.</p>
                `,
      } as ArticleContentHtml,
    ],
  ],
} as Article;
