import { ResolveField, Resolver, Parent } from "@nestjs/graphql";
import {
  Permission,
  Allow,
  RequestContext,
  Ctx,
  Logger,
  Product,
  Collection,
} from "@vendure/core";
import { loggerCtx } from "../constants";

@Resolver("Product")
export class ProcutSeoResolver {
  @ResolveField()
  @Allow(Permission.Public)
  async seo(@Ctx() ctx: RequestContext, @Parent() product: Product) {
    Logger.debug(`Returning Seo data for Product id ${product.id}`, loggerCtx);
    return handle(product);
  }
}
@Resolver("Collection")
export class CollectionSeoResolver {
  @ResolveField()
  @Allow(Permission.Public)
  async seo(@Ctx() ctx: RequestContext, @Parent() collection: Collection) {
    Logger.debug(`Returning Seo data for Collection id ${collection.id}`, loggerCtx);
    return handle(collection);
  }
}

function handle(data: Product | Collection) {
  const customFields = data.customFields as any;
  return {
    title: customFields?.seoTitle || data.name,
    description: customFields?.seoDescription || data.description,
    facebookImage: customFields?.facebookImage || data.featuredAsset || null,
    twitterImage: customFields?.twitterImage || data.featuredAsset || null,
  };
}
