import { expect } from 'chai';
import 'mocha';

import Order from '../../../src/graphql/types/order';

describe('Order GraphQL type definition', () => {

  it('should have correct properties', () => {
    expect(Order.includes('_id: String')).to.be.true;
  });

});
