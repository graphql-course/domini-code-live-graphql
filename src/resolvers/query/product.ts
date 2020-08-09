import { IResolvers } from 'graphql-tools';
import { Db } from 'mongodb';
import { COLLECTIONS } from '../../config/constants';

const queryProductResolvers: IResolvers = {
    Query: {
        async products(_, __, { db }) {
            const database = db as Db;
            console.log(await database.collection(COLLECTIONS.PRODUCTS).find().toArray());
            return await database.collection(COLLECTIONS.PRODUCTS).find().toArray().then(
                (result: Array<object>) => result
            ).catch(() => []);
        }
    }
};

export default queryProductResolvers;