/**
 * Buy Me A Coffee JS | Main File
 * by Waren Gonzaga
 */

const axios = require('axios');

const baseURL = 'https://developers.buymeacoffee.com/api/v1';

const requester = axios.create({
	baseURL,
    responseType: 'json',
    validateStatus: (status) => status === 200
});

class BMC {
    constructor(access_token) {
        this.access_token = access_token;
    }

    Supporters(callback) {
        this._sendRequest('supporters', callback);
    }

    Subscriptions(callback) {
        this._sendRequest('subscriptions', callback);
    }

    Extras(callback) {
        this._sendRequest('extras', callback);
    }

    async _sendRequest(path, callback) {
        const response = await requester.get(path, {
            headers: {
                Authorization: 'Bearer ' + this.access_token,
            }
        });
        callback(response.data);                              
    }
}

module.exports = BMC;
