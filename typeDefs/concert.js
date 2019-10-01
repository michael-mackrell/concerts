const { gql } = require('apollo-server-express');

export default gql `

    type Query {
        concert(id: ID!): Concert
        concerts: [Concert!]!
    }

    type Mutation{
        addConcert(name: String!, venue: String, date: String!, time: String, details: String): Concert
    }

    type Concert {
        name: String
        venue: String
        date: String
        id: String
        time: String
        details: String
    }



`;
