import { PluginCommonModule, VendurePlugin } from "@vendure/core";

import { SeoCustomFields } from "./config/custom-fields";
import { shopApiExtensions } from "./api/api-extensions";
import { CollectionSeoResolver, ProcutSeoResolver } from "./api/seo.resolver";

@VendurePlugin({
  imports: [PluginCommonModule],
  shopApiExtensions: {
    schema: shopApiExtensions,
    resolvers: [ProcutSeoResolver, CollectionSeoResolver],
  },
  configuration: (config) => {
    config.customFields.Product.push(...SeoCustomFields);
    config.customFields.Collection.push(...SeoCustomFields);
    return config;
  },
  compatibility: '^2.0.0',
})
export class SeoPlugin {}