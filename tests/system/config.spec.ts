import { expect } from 'chai';
import 'mocha';

import config, { development, test, production } from '../../config';

describe('Config', () => {

  it('should have config for each env', () => {
    expect(development).to.exist;
    expect(test).to.exist;
    expect(production).to.exist;
  });

  it('should load the config based on env', () => {
    expect(config).to.deep.equal(development); // development because no env is passed in test
  });

  it('should configure the db', () => {
    expect(development.database.url).to.equal('mongodb://localhost:27017/wecanfeed-dev');
    expect(test.database.url).to.equal('mongodb://localhost:27017/wecanfeed-test');
    expect(production.database.url).to.equal('mongodb://localhost:27017/wecanfeed-prod');
  });

});
