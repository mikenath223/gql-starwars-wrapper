import { toPromise } from 'apollo-link';
import { typeDefs, resolvers, PeopleAPI, ApolloServer } from '.';

const createMockTestServer = () => {
  const peopleAPI = new PeopleAPI();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({ peopleAPI }),
  });

  return { server, peopleAPI };
};

export { createMockTestServer, toPromise };
