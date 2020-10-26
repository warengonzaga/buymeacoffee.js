'use strict';

const nock = require('nock');
const {baseURL} = require('../src/config');
const {supportersTemplate, subscriptionsTemplate, extrasTemplate} = require('./api-templates');
const token = 'let-me-pass';
const BMC = require('../src/index');
const assert = require('assert');

describe('Supporters', () => {
  const BMCAPIMock = nock(baseURL, {
    reqheaders: {
      Authorization: 'Bearer ' + token,
    }});
    afterEach(nock.cleanAll);
  it('should get supporters', done => {
    BMCAPIMock
    .get('/supporters')
    .reply(200, supportersTemplate)

    const BMCInstance = new BMC(token);
    BMCInstance.Supporters((supportersData) => {
      assert.deepStrictEqual(supportersData, supportersTemplate);
      done();
    });
  });
});

describe('Subscriptions', () => {
  const BMCAPIMock = nock(baseURL, {
    reqheaders: {
      Authorization: 'Bearer ' + token,
    }});
    afterEach(nock.cleanAll);
  it('should get subscriptions', done => {
    BMCAPIMock
    .get('/subscriptions')
    .reply(200, subscriptionsTemplate)

    const BMCInstance = new BMC(token);
    BMCInstance.Subscriptions((subscriptions) => {
      assert.deepStrictEqual(subscriptions, subscriptionsTemplate);
      done();
    });
  });
});

describe('Extras', () => {
  const BMCAPIMock = nock(baseURL, {
    reqheaders: {
      Authorization: 'Bearer ' + token,
    }});
    afterEach(nock.cleanAll);
  it('should get extras', done => {
    BMCAPIMock
    .get('/extras')
    .reply(200, extrasTemplate)

    const BMCInstance = new BMC(token);
    BMCInstance.Extras((extras) => {
      assert.deepStrictEqual(extras, extrasTemplate);
      done();
    });
  });
});