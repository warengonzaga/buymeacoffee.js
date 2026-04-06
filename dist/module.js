import $hgUW1$axios from "axios";


var $c04235eee8e32194$export$2e2bcd8739ae039 = {
    baseURL: "https://developers.buymeacoffee.com/api/v1"
};


const $ce3750ab537d0183$var$requester = (0, $hgUW1$axios).create({
    baseURL: (0, $c04235eee8e32194$export$2e2bcd8739ae039).baseURL,
    responseType: "json",
    validateStatus: (status)=>status === 200
});
var $ce3750ab537d0183$export$2e2bcd8739ae039 = $ce3750ab537d0183$var$requester;


class $149c1bd638913645$export$2e2bcd8739ae039 {
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
        const response = await (0, $ce3750ab537d0183$export$2e2bcd8739ae039).get(path, {
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


export {$149c1bd638913645$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=module.js.map
