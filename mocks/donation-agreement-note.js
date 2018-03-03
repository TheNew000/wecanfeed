import faker from 'faker';
import moment from 'moment';

export default (user) => {
  return {
    timestamps: {
      createdAt: moment(faker.date.past()).format('x'),
      updatedAt: moment(faker.date.recent()).format('x')
    },
    comments: faker.lorem.paragraph(),
    isNegativeFeedback: faker.random.boolean(),
    createdBy: user
  };
};
