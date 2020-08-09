import GMR from 'graphql-merge-resolvers';
import subscriptionStockResolvers from './stock';

const subscriptionResolvers = GMR.merge([
    subscriptionStockResolvers
]);

export default subscriptionResolvers;