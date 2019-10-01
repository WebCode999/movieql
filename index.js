import {
    GraphQLSever
} from "graphql-yoga";

const sever = new GraphQLSever({

});

sever.start(() => console.log("Graphql Server Running"));