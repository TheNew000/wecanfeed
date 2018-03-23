import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './types';
import resolvers from './resolvers';
import inputs from './inputs';

// Query and Mutation definitions for GraphQL
const queriesAndMutationsAPI = `
  type Query {
    getConsumerGroups: String,
    getConsumers: String,
    getProviders: String
  }

  type Mutation {
    acceptDonationAgreement: String,
    addDonation: String,
    addDonationAgreementComment: String,
    addOrder: String,
    claimDonation: String,
    deactivateUser: String,
    fulfillDonationDelivery: String,
    fulfillOrder: String,
    initiateDonationAgreement: String,
    initiateDonationDelivery: String,
    inviteUser: String,
    registerConsumer: String,
    registerConsumerGroup: String,
    registerProvider: String,
    registerUser: String,
    updateConsumer: String,
    updateConsumerGroup: String,
    updateOrder: String,
    updateProducts: String,
    updateProvider: String,
    updateTeam: String,
    updateUser: String,
    verifyUser: String
  }
`;

// Construct and export executable schema for GraphQL
module.exports = makeExecutableSchema({
  resolvers,
  typeDefs: [
    ...typeDefs,
    ...inputs,
    queriesAndMutationsAPI
  ],
});
