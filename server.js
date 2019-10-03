import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import { ApolloServer, gql } from 'apollo-server-express';
import resolvers from './resolvers';
import fetch from 'node-fetch'
import typeDefs from './typeDefs';



import ApolloClient from 'apollo-boost';



const app = express();
const concertRoute = require('./routes/concerts');



const client = new ApolloClient({uri: 'http://localhost:5000/graphql',fetch: fetch});



// client
//   .query({
//     query: gql`
//       {
//         concerts {
//           name
//           details
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));




// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
  .connect(db, {useNewUrlParser: true}) // Adding new mongo url parser
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err + "oh no there is an error"));

  // Use Routes
app.use('/api/concerts', concertRoute);
///////////////


const server = new ApolloServer({
  typeDefs,
  resolvers,
  //playground: !IN_PROD,
  context: ({ req, res }) => ({ req, res})
});

server.applyMiddleware({ app });





///////////////////

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
