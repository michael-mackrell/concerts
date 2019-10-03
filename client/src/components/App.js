import React from 'react';
import ShowList from './showList';
import { ApolloProvider } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import ApolloClient from 'apollo-boost';import { useQuery } from '@apollo/react-hooks';


const App = () => {
   
    
//     client
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
// const SHOW_QUERY = gql`
// {
//     concerts {
//       name
//       details
//     }
// }`;

// const data = useQuery(SHOW_QUERY);

// console.log(data.data)



    return (

            <ShowList></ShowList>

    )
};

export default App;