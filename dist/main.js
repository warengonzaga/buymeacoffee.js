var $cMI0G$axios = require("axios");

var $4540a25bc7f58d61$exports = {};
'use strict';

var $5d0899154dd6371f$exports = {};
'use strict';
$5d0899154dd6371f$exports = {
    baseURL: 'https://developers.buymeacoffee.com/api/v1'
};


const { baseURL: $4540a25bc7f58d61$var$baseURL  } = $5d0899154dd6371f$exports;
const $4540a25bc7f58d61$var$requester = $cMI0G$axios.create({
    baseURL: $4540a25bc7f58d61$var$baseURL,
    responseType: 'json',
    validateStatus: (status)=>status === 200
});
$4540a25bc7f58d61$exports = $4540a25bc7f58d61$var$requester;


class $349a00930b14e029$var$BMC {
    constructor(access_token){
        this.access_token = access_token;
    }
    Supporters() {
        return this._sendRequest('supporters');
    }
    Subscriptions() {
        return this._sendRequest('subscriptions');
    }
    Extras() {
        return this._sendRequest('extras');
    }
    async _sendRequest(path) {
        const response = await $4540a25bc7f58d61$exports.get(path, {
            headers: {
                Authorization: 'Bearer ' + this.access_token
            },
            validateStatus: function(status) {
                return status >= 200 && status < 300; // default
            }
        });
        return response.data;
    }
}
module.exports = $349a00930b14e029$var$BMC;


//# sourceMappingURL=main.js.map
