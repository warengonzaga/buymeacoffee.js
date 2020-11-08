/**
 * Buy Me A Coffee JS | Main File
 * by Waren Gonzaga
 */

const requester = require('./requester');

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
