/**
 * Buy Me A Coffee JS | Main File
 * by Waren Gonzaga
 */

const { get } = require('request');
const baseURL = 'https://developers.buymeacoffee.com/api/v1';

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

    _sendRequest(path, callback) {
        const url = `${baseURL}/${path}`

        get(url, {
            'auth': {
                'bearer': this.access_token
            }
        }, function (error, response, body) {
            if (!error & response.statusCode === 200) {
                callback(JSON.parse(body))
            }                               
        })
    }
}

module.exports = BMC;
