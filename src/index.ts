import {ApolloServer} from '@apollo/server';
import {startStandaloneServer} from '@apollo/server/standalone';
import mongoose from 'mongoose';

const MONGODB = 'mongodb://localhost:27017';

//Apollo Server
//
//

import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
mongoose.set('strictQuery', false);
mongoose
  .connect(MONGODB)
  .then(async () => {
    console.log('MongoDB Connected.');
  })
  .then(async () => {
    const {url} = await startStandaloneServer(server);
    console.log(`🚀 Server ready at ${url}`);
  });
