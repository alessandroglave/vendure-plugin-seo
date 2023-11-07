import { gql } from "graphql-tag";

export const shopApiExtensions = gql`
  type Seo {
    title: String!
    description: String
    facebookImage: Asset
    twitterImage: Asset
  }
  extend type Product {
    seo: Seo!
  }
  extend type Collection {
    seo: Seo!
  }
`;