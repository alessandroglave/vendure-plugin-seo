import { Asset, CustomFieldConfig, LanguageCode } from "@vendure/core";

export const SeoCustomFields: CustomFieldConfig[] = [
  {
    name: "seoTitle",
    type: "localeString",
    label: [
      { languageCode: LanguageCode.en, value: "SEO Title" },
      { languageCode: LanguageCode.it, value: "SEO Title" },
    ],
    ui: { tab: "SEO" },
    public: false,
  },
  {
    name: "seoDescription",
    type: "localeString",
    length: 65535,
    label: [
      { languageCode: LanguageCode.en, value: "SEO Description" },
      { languageCode: LanguageCode.it, value: "Descrizione SEO" },
    ],
    description: [
      { languageCode: LanguageCode.en, value: "SEO description" },
      {
        languageCode: LanguageCode.it,
        value: "Descrizione SEO",
      },
    ],
    ui: { tab: "SEO" },
    public: false,
  },
  {
    name: "facebookImage",
    type: "relation",
    graphQLType: "Asset",
    entity: Asset,
    label: [
      { languageCode: LanguageCode.en, value: "Facebook SEO image" },
      { languageCode: LanguageCode.it, value: "Immagine SEO Facebook" },
    ],
    description: [
      { languageCode: LanguageCode.en, value: "Reccommended size: 1200x630px" },
      {
        languageCode: LanguageCode.it,
        value: "Dimensione consigliata: 1200x630px",
      },
    ],
    ui: { tab: "SEO" },
    eager: true,
    public: false,
  },
  {
    name: "twitterImage",
    type: "relation",
    graphQLType: "Asset",
    entity: Asset,
    label: [
      { languageCode: LanguageCode.en, value: "Twitter SEO image" },
      { languageCode: LanguageCode.it, value: "Immagine SEO Twitter" },
    ],
    description: [
      { languageCode: LanguageCode.en, value: "Reccommended size: 1200x675px" },
      {
        languageCode: LanguageCode.it,
        value: "Dimensione consigliata: 1200x675px",
      },
    ],
    ui: { tab: "SEO" },
    eager: true,
    public: false,
  },
];
