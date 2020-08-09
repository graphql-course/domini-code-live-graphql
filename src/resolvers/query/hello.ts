import { IResolvers } from 'graphql-tools';

const queryHelloResolvers: IResolvers = {
    Query: {
        hello(): string {
            return 'Hello world Anartz!!';
        },
        helloWithName(_: void, args): string {
            return `Hello ${args.name}!!`;
        },
        helloToGraphQLCourse(): string {
            return 'Hello to GraphQL Course!!';
        }
    }
};

export default queryHelloResolvers;