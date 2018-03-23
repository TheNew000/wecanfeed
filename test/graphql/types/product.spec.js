import { expect } from 'chai';
import 'mocha';

import Product from '../../../src/graphql/types/product';

describe('Product GraphQL type definition', () => {

  it('should have correct properties', () => {
    expect(Product.includes('_id: String')).to.be.true;
  });

});
