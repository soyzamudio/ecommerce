import { GraphQLClient } from "graphql-request";
import { getSdk } from "@src/__generated__/sdk";
const client = new GraphQLClient("https://coracosmetics.swell.store/graphql", {
  headers: {
    Authorization: "pk_ZUb02oMLQ1vp6XgXTUUUUJWeieKWy4xg",
  },
});
export default getSdk(client);