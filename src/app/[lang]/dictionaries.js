const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  ar: () => import("./dictionaries/ar.json").then((module) => module.default),
  tr: () => import("./dictionaries/tr.json").then((module) => module.default),
  de: () => import("./dictionaries/de.json").then((module) => module.default),
  fa: () => import("./dictionaries/fa.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();
