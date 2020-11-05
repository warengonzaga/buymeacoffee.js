/*!
 * BuyMeACoffeeJS - https://github.com/WarenGonzaga/buymeacoffee.js#readme
 * A simple and lightweight but powerful Node.js client for Buy Me A Coffee API
 * Version: 1.0.7-alpha.1
 * Github: https://github.com/WarenGonzaga/buymeacoffee.js
 * Licensed Under The MIT License: http://opensource.org/licenses/MIT
 * Copyright (c) 2020 Waren Gonzaga
 *
 * Facebook: @warengonzagaofficial
 * Twitter: @warengonzaga
 * Github: @warengonzaga
 * Website: warengonzaga.com
 */

const got=require("got"),baseURL="https://developers.buymeacoffee.com/api/v1",get=got.extend({prefixUrl:baseURL,responseType:"json"});class BMC{constructor(e){this.access_token=e}Supporters(e){this._sendRequest("supporters",e)}Subscriptions(e){this._sendRequest("subscriptions",e)}Extras(e){this._sendRequest("extras",e)}async _sendRequest(e,s){const t=await get(e,{headers:{Authorization:"Bearer "+this.access_token}});200===t.statusCode&&s(t.body)}}module.exports=BMC;