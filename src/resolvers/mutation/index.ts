import GMR from 'graphql-merge-resolvers';
import resolversTodosMutation from './todos';
import resolversProductMutation from './product';

const mutationResolvers = GMR.merge([
    resolversTodosMutation,
    resolversProductMutation
]);

export default mutationResolvers;