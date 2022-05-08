var $1ZQrD$axios = require("axios");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $5e2f01247a5d6f10$export$2e2bcd8739ae039);

let $e8acabe42e7a5abd$var$config = {
    baseURL: "https://developers.buymeacoffee.com/api/v1",
    test: 123
};
var $e8acabe42e7a5abd$export$2e2bcd8739ae039 = $e8acabe42e7a5abd$var$config;


const $bf8f2aa78eaacdbd$var$requester = ($parcel$interopDefault($1ZQrD$axios)).create({
    baseURL: $e8acabe42e7a5abd$export$2e2bcd8739ae039.baseURL,
    responseType: "json",
    validateStatus: (status)=>status === 200
});
var $bf8f2aa78eaacdbd$export$2e2bcd8739ae039 = $bf8f2aa78eaacdbd$var$requester;


class $5e2f01247a5d6f10$export$2e2bcd8739ae039 {
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
        const response = await $bf8f2aa78eaacdbd$export$2e2bcd8739ae039.get(path, {
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


//# sourceMappingURL=main.js.map
