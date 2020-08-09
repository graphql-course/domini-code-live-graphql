import { GraphQLSchema } from 'graphql';
import resolvers from './../resolvers';
import { makeExecutableSchema } from 'graphql-tools';
import { loadFilesSync }  from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
const typeDefs = mergeTypeDefs(loadFilesSync(`${__dirname}/**/*.graphql`));

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;