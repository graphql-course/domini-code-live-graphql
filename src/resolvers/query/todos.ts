import { IResolvers } from 'graphql-tools';
import { TODOS_LIST } from './../../data/todos-list';

const queryTodosResolvers: IResolvers = {
    Query: {
        todos(): Array<string> {
            console.log(TODOS_LIST);
            return TODOS_LIST;
        }
    }
};

export default queryTodosResolvers;