import { IResolvers } from 'graphql-tools';
import { TODOS_LIST } from './../../data/todos-list';

const resolversTodosMutation: IResolvers = {
    Mutation: {
        add(_, { value }) {
            TODOS_LIST.push(value);
            return TODOS_LIST;
        }
    }
};

export default resolversTodosMutation;