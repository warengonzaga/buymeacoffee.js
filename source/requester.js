'use strict';

const axios = require('axios');
const config = require('./config');
const {baseURL} = config;

const requester = axios.create({
	baseURL,
    responseType: 'json',
    validateStatus: (status) => status === 200
});

module.exports = requester;