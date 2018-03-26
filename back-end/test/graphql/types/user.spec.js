import { expect } from 'chai';
import 'mocha';

import User from '../../../src/graphql/types/user';

describe('User GraphQL type definition', () => {

  it('should have correct properties', () => {
    expect(User.includes('_id: String')).to.be.true;
  });

});
