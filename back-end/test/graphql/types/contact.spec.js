import { expect } from 'chai';
import 'mocha';

import Contact from '../../../src/graphql/types/contact';

describe('Contact GraphQL type definition', () => {

  it('should have correct properties', () => {
    expect(Contact.includes('_id: String')).to.be.true;
  });

});
