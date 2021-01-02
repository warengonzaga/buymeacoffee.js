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

test('Supporters retreival', async () => {
  moxios.stubRequest('supporters', {
    status: 200,
    response: supportersTemplate
  })
  const BMCInstance = new BMC(token);
  const supportersData = await BMCInstance.Supporters();
    expect(supportersData).toStrictEqual(supportersTemplate);
});


test('Subscription retrieval', async () => {
  moxios.stubRequest('subscriptions', {
    status: 200,
    response: subscriptionsTemplate
  })
  const BMCInstance = new BMC(token);
  const subscriptions = await BMCInstance.Subscriptions();
    expect(subscriptions).toStrictEqual(subscriptionsTemplate);
});

test('Extras retrieval', async () => {
  moxios.stubRequest('extras', {
    status: 200,
    response: extrasTemplate
  })
  const BMCInstance = new BMC(token);
  const extras = await BMCInstance.Extras();
    expect(extras).toStrictEqual(extrasTemplate);
});