// addProduct(product: ProductInput): Boolean

import { IResolvers } from 'graphql-tools';
import { COLLECTIONS, UPDATE_STOCK } from '../../config/constants';
import { Db } from 'mongodb';

const resolversProductMutation: IResolvers = {
  Mutation: {
    async addProduct(_, { product }, { db, pubsub }) {
      console.log(product);
      const database = db as Db;
      return await database.collection(COLLECTIONS.PRODUCTS)
      .insertOne(product).then(async () => {
        const list = await database.collection(COLLECTIONS.PRODUCTS).find().toArray();
        pubsub.publish(UPDATE_STOCK, { changeStock: list});
        return true;
      }).catch(() => false);
    },
    async updateProduct(_, {code, stock}, { db, pubsub }) {
        const database = db as Db;
        return await database.collection(COLLECTIONS.PRODUCTS).updateOne(
            { code },
            {
              $inc: { stock }
            }
          ).then( async () => {
              const list = await database.collection(COLLECTIONS.PRODUCTS).find().toArray();
              pubsub.publish(UPDATE_STOCK, { changeStock: list});
              return true;
            }).catch(() => false);
    }
  },
};

export default resolversProductMutation;
