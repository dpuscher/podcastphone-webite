const NextI18Next = require("next-i18next").default;

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "de",
  otherLanguages: ["en"],
  localeSubpaths: {
    en: "en",
  },
});

module.exports = NextI18NextInstance;
