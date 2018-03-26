import { expect } from 'chai';
import 'mocha';

import Consumer from '../../../src/graphql/types/consumer';

describe('Consumer GraphQL type definition', () => {

  it('should have correct properties', () => {
    expect(Consumer.includes('_id: String')).to.be.true;
  });

});
