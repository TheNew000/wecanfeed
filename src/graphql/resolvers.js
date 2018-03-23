// import mutations
import acceptDonationAgreement from './resolvers/mutations/accept-donation-agreement';
import addDonation from './resolvers/mutations/add-donation';
import addDonationAgreementComment from './resolvers/mutations/add-donation-agreement-comment';
import addOrder from './resolvers/mutations/add-order';
import claimDonation from './resolvers/mutations/claim-donation';
import deactivateUser from './resolvers/mutations/deactivate-user';
import fulfillDonationDelivery from './resolvers/mutations/fulfill-donation-delivery';
import fulfillOrder from './resolvers/mutations/fulfill-order';
import initiateDonationAgreement from './resolvers/mutations/initiate-donation-agreement';
import initiateDonationDelivery from './resolvers/mutations/initiate-donation-delivery';
import inviteUser from './resolvers/mutations/invite-user';
import registerConsumer from './resolvers/mutations/register-consumer';
import registerConsumerGroup from './resolvers/mutations/register-consumer-group';
import registerProvider from './resolvers/mutations/register-provider';
import registerUser from './resolvers/mutations/register-user';
import updateConsumer from './resolvers/mutations/update-consumer';
import updateConsumerGroup from './resolvers/mutations/update-consumer-group';
import updateOrder from './resolvers/mutations/update-order';
import updateProducts from './resolvers/mutations/update-products';
import updateProvider from './resolvers/mutations/update-provider';
import updateTeam from './resolvers/mutations/update-team';
import updateUser from './resolvers/mutations/update-user';
import verifyUser from './resolvers/mutations/verify-user';

// import queries
import getConsumerGroups from './resolvers/queries/get-consumer-groups';
import getConsumers from './resolvers/queries/get-consumers';
import getProviders from './resolvers/queries/get-providers';

const resolvers = {
  Query: {
    getConsumerGroups,
    getConsumers,
    getProviders
  },
  Mutation: {
    acceptDonationAgreement,
    addDonation,
    addDonationAgreementComment,
    addOrder,
    claimDonation,
    deactivateUser,
    fulfillDonationDelivery,
    fulfillOrder,
    initiateDonationAgreement,
    initiateDonationDelivery,
    inviteUser,
    registerConsumer,
    registerConsumerGroup,
    registerProvider,
    registerUser,
    updateConsumer,
    updateConsumerGroup,
    updateOrder,
    updateProducts,
    updateProvider,
    updateTeam,
    updateUser,
    verifyUser
  }
};

export default resolvers;
