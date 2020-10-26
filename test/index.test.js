'use strict';

const nock = require('nock');
const {
  baseURL
} = require('../src/config');
const {
  supportersTemplate,
  subscriptionsTemplate,
  extrasTemplate
} = require('./api-templates');
const token = 'let-me-pass';
const BMC = require('../src/index');
let BMCAPIMock;

beforeEach(() => {
  BMCAPIMock = nock(baseURL, {
    reqheaders: {
      Authorization: 'Bearer ' + token,
    }
  });
});

afterEach(nock.cleanAll);

test('Supporters retreival', done => {
  BMCAPIMock
    .get('/supporters')
    .reply(200, supportersTemplate)
  const BMCInstance = new BMC(token);
  BMCInstance.Supporters((supportersData) => {
    expect(supportersData).toStrictEqual(supportersTemplate);
    done();
  });
});


test('Subscription retrieval', done => {
  BMCAPIMock
    .get('/subscriptions')
    .reply(200, subscriptionsTemplate)
  const BMCInstance = new BMC(token);
  BMCInstance.Subscriptions((subscriptions) => {
    expect(subscriptions).toStrictEqual(subscriptionsTemplate);
    done();
  });
});

test('Extras retrieval', done => {
  BMCAPIMock
    .get('/extras')
    .reply(200, extrasTemplate)
  const BMCInstance = new BMC(token);
  BMCInstance.Extras((extras) => {
    expect(extras).toStrictEqual(extrasTemplate);
    done();
  });
});