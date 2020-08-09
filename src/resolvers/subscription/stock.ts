import { IResolvers } from 'graphql-tools';
import { UPDATE_STOCK } from '../../config/constants';


const subscriptionStockResolvers: IResolvers = {
    Subscription: {
        changeStock: {
            subscribe: (_, __, { pubsub}) => pubsub.asyncIterator(UPDATE_STOCK),
        }
    }
};

export default subscriptionStockResolvers;