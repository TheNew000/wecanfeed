import { expect } from 'chai';
import 'mocha';

import Tag from '../../../src/graphql/types/tag';

describe('Tag GraphQL type definition', () => {

  it('should have correct properties', () => {
    expect(Tag.includes('_id: String')).to.be.true;
  });

});
