import seedHarness from './seed-harness';
import populateMockArrays from './populate-mock-arrays';
import User from '../../src/mongoose/user';
import user from '../../mocks/user';

export default (count, parents, userGroupKey, contact = false) => {
  return Promise.all(
    seedHarness(User.Model, populateMockArrays(count, user))
  ).then((userGroup) => {
    parents.map((provider) => {
      provider.team[userGroupKey] = userGroup;
      if (contact) {
        provider.team.contacts[contact] = userGroup[0];
      }
    });
  });
};
