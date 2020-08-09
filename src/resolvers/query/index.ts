import GMR from 'graphql-merge-resolvers';
import queryHelloResolvers from './hello';
import queryTodosResolvers from './todos';
import queryProductResolvers from './product';

const queryResolvers = GMR.merge([
    queryHelloResolvers,
    queryTodosResolvers,
    queryProductResolvers
]);

export default queryResolvers;