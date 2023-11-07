# Related Products Vendure plugin

Vendure Plugin which adds SEO fields to Products and Collections.

## Documentation

### Install

```
yarn add vendure-plugin-seo
```

or 

```
npm install vendure-plugin-seo
```

### Register plugin in your Vendure config

```js
import { SeoPlugin } from vendure-plugin-seo;

//...

plugins: [
  SeoPlugin
]
```

### Generate and run migration

```
yarn migration:generate SeoPlugin
yarn migration:run
```
or
```
npm run migration:generate SeoPlugin
npm run migration:run
```

## Usage

This plugin uses private Custom Fields to set `Seo Title`, `Seo Description`, `Facebook and Twitter images`, then extends `Product` and `Collection` GraphQL types with a custom `seo` GraphQL type. 

SEO informations are not mandatory; in their absence, default Product/Collection informations will be used as follow: 

| Field | Fallback |
| ---------------- | -------- |
| entity.seo.title | entity.title |
| entity.seo.description | entity.description |
| entity.seo.facebookImage | entity.featuredAsset |
| entity.seo.twitterImage | entity.featuredAsset |

### Admin UI

![Seo Vendure Plugin: Product Admin UI](/docs/product-admin-ui.png)
![Seo Vendure Plugin: Collection Admin UI](/docs/collections-admin-ui.png)

### GraphQL

![Seo Vendure Plugin: GraphQL](/docs/seo-plugin-graphql.png)

## Credits

This repo is based on [Vendure Plugin Template](https://github.com/vendure-ecommerce/plugin-template)