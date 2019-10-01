const { gql } = require('apollo-server-express');

export default gql `


    extend type Query {
        concert(id: ID!): Concert
        concerts: [Concert!]!
    }


    extend type Mutation{
        addConcert(showName: String!, venue: String, date: String!, time: String, details: String)
    }



`;