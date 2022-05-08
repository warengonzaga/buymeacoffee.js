import $f3Ts0$axios from "axios";


let $e5d4daa4fe781ca0$var$config = {
    baseURL: "https://developers.buymeacoffee.com/api/v1",
    test: 123
};
var $e5d4daa4fe781ca0$export$2e2bcd8739ae039 = $e5d4daa4fe781ca0$var$config;


const $363d107d403bcf21$var$requester = $f3Ts0$axios.create({
    baseURL: $e5d4daa4fe781ca0$export$2e2bcd8739ae039.baseURL,
    responseType: "json",
    validateStatus: (status)=>status === 200
});
var $363d107d403bcf21$export$2e2bcd8739ae039 = $363d107d403bcf21$var$requester;


class $a8e101027d325e52$export$2e2bcd8739ae039 {
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
        const response = await $363d107d403bcf21$export$2e2bcd8739ae039.get(path, {
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


export {$a8e101027d325e52$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=module.js.map
