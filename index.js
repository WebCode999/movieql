import {
    GraphQLSever
} from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const sever = new GraphQLSever({
    typeDefs: "graphql/schema.graphql",
    resolvers
});

sever.start(() => console.log("Graphql Server Running"));