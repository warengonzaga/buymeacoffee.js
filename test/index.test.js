'use strict';

const requester = require('../src/requester');
const moxios = require('moxios');

const {
  supportersTemplate,
  subscriptionsTemplate,
  extrasTemplate
} = require('./api-templates');

const token = 'let-me-pass';
const BMC = require('../src/index');

beforeEach(() => moxios.install(requester));
afterEach(() => moxios.uninstall(requester));

test('Supporters retreival', done => {
  moxios.stubRequest('supporters', {
    status: 200,
    response: supportersTemplate
  })
  const BMCInstance = new BMC(token);
  BMCInstance.Supporters((supportersData) => {
    expect(supportersData).toStrictEqual(supportersTemplate);
    done();
  });
});

test('Subscription retrieval', done => {
  moxios.stubRequest('subscriptions', {
    status: 200,
    response: subscriptionsTemplate
  })
  const BMCInstance = new BMC(token);
  BMCInstance.Subscriptions((subscriptions) => {
    expect(subscriptions).toStrictEqual(subscriptionsTemplate);
    done();
  });
});

test('Extras retrieval', done => {
  moxios.stubRequest('extras', {
    status: 200,
    response: extrasTemplate
  })
  const BMCInstance = new BMC(token);
  BMCInstance.Extras((extras) => {
    expect(extras).toStrictEqual(extrasTemplate);
    done();
  });
});