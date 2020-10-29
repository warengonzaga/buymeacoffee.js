/**
 * Buy Me A Coffee JS | Main File
 * by Waren Gonzaga
 */

const got = require('got');

const baseURL = 'https://developers.buymeacoffee.com/api/v1';

const get = got.extend({
	prefixUrl: baseURL,
	responseType: 'json'
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
        const response = await get(path, {
            headers: {
                Authorization: 'Bearer ' + this.access_token,
            }
        });
        if (response.statusCode === 200) {
            callback(response.body);
        }                               
    }
}

module.exports = BMC;
