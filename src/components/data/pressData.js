const imageTwitterBaer = require(`../../assets/twitter_baer.png?resize&sizes[]=120&sizes[]=180&sizes[]=200&sizes[]=360&sizes[]=400&sizes[]=800`);
const imageChip = require(`../../assets/podcastphone_chipde.png?resize&sizes[]=120&sizes[]=180&sizes[]=200&sizes[]=360&sizes[]=400&sizes[]=800`);
const imagePdf = require(`../../assets/pdf_icon.png?resize&sizes[]=120&sizes[]=180&sizes[]=200&sizes[]=360&sizes[]=400&sizes[]=800`);
const pdfPM001 = require(`../../assets/PM_PodcastPhone_001.pdf`);


export default [
  {
    quelle: "Default",
    image: imageDefault,
    content:
      "default",
    link: "default"
  },
  {
    quelle: "1. Pressemitteilung",
    image: imageTwitterBaer,
    content:
      "Unsere erste Pressemitteilung des PodcastPhone Teams",
    link: pdfPM001
  },
  {
    quelle: "Twitter",
    image: imageTwitterBaer,
    content:
      "Retweet von einem PodcastPhone Beitrag von Dorothee Bär (Staatsministerin für Digitalisierung)",
    link: "https://twitter.com/pame/status/1241443910884429824"
  },
  {
    quelle: "CHIP.de",
    image: imageChip,
    content:
      "Das PodcastPhone als Service auf CHIP.de",
    link: "https://www.chip.de/downloads/PodcastPhone_182565403.html"
  },
];
