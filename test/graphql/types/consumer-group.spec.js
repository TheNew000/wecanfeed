import { expect } from 'chai';
import 'mocha';

import ConsumerGroup from '../../../src/graphql/types/consumer-group';

describe('ConsumerGroup GraphQL type definition', () => {

  it('should have correct properties', () => {
    expect(ConsumerGroup.includes('_id: String')).to.be.true;
  });

});
