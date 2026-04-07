var $8zHUo$axios = require("axios");


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

$parcel$export(module.exports, "default", () => $882b6d93070905b3$export$2e2bcd8739ae039);

var $dba5cd6913742fdd$export$2e2bcd8739ae039 = {
    baseURL: "https://developers.buymeacoffee.com/api/v1"
};


const $2dbaa43ff7d0c056$var$requester = (0, ($parcel$interopDefault($8zHUo$axios))).create({
    baseURL: (0, $dba5cd6913742fdd$export$2e2bcd8739ae039).baseURL,
    responseType: "json",
    validateStatus: (status)=>status === 200
});
var $2dbaa43ff7d0c056$export$2e2bcd8739ae039 = $2dbaa43ff7d0c056$var$requester;


class $882b6d93070905b3$export$2e2bcd8739ae039 {
    constructor(access_token){
        this.access_token = access_token;
    }
    Supporters() {
        return this._sendRequest("supporters");
    }
    Subscriptions() {
        return this._sendRequest("subscriptions");
    }
    Extras() {
        return this._sendRequest("extras");
    }
    async _sendRequest(path) {
        const response = await (0, $2dbaa43ff7d0c056$export$2e2bcd8739ae039).get(path, {
            headers: {
                Authorization: `Bearer ${this.access_token}`
            },
            validateStatus: (status)=>{
                return status >= 200 && status < 300; // default
            }
        });
        return response.data;
    }
}


//# sourceMappingURL=main.js.map
