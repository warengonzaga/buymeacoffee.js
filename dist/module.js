import {create as $lN7Lq$create} from "axios";

var $e9036bc7e4b4ba73$exports = {};
var $d4c91d26f8674b5c$exports = {};
'use strict';

var $2213b26d374442d6$exports = {};
'use strict';
$2213b26d374442d6$exports = {
    baseURL: 'https://developers.buymeacoffee.com/api/v1'
};


const { baseURL: $d4c91d26f8674b5c$var$baseURL  } = $2213b26d374442d6$exports;
const $d4c91d26f8674b5c$var$requester = $lN7Lq$create({
    baseURL: $d4c91d26f8674b5c$var$baseURL,
    responseType: 'json',
    validateStatus: (status)=>status === 200
});
$d4c91d26f8674b5c$exports = $d4c91d26f8674b5c$var$requester;


class $e9036bc7e4b4ba73$var$BMC {
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
        const response = await $d4c91d26f8674b5c$exports.get(path, {
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
$e9036bc7e4b4ba73$exports = $e9036bc7e4b4ba73$var$BMC;


export {$e9036bc7e4b4ba73$exports as default};
//# sourceMappingURL=module.js.map
