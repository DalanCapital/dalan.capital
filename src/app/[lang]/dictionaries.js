const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  fr: () => import("./dictionaries/fr.json").then((module) => module.default),
  tr: () => import("./dictionaries/tr.json").then((module) => module.default),
  de: () => import("./dictionaries/de.json").then((module) => module.default),
  fa: () => import("./dictionaries/fa.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
