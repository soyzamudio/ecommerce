import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: {
    "https://coracosmetics.swell.store/graphql": {
      headers: {
        Authorization: "pk_ZUb02oMLQ1vp6XgXTUUUUJWeieKWy4xg",
      },
    },
  },
  documents: ["src/**/*.gql"],
  generates: {
    "./src/__generated__/sdk.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        rawRequest: true, // includes data and errors
        preResolveTypes: false, // don't preresolve types so descriptions are loaded
      },
    },
  },
};

export default config;