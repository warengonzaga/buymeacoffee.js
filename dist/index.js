/*!
 * BuyMeACoffeeJS - https://github.com/WarenGonzaga/buymeacoffee.js#readme
 * A simple and lightweight but powerful Node.js client for Buy Me A Coffee API
 * Version: 1.0.0
 * Github: https://github.com/WarenGonzaga/buymeacoffee.js
 * Licensed Under The MIT License: http://opensource.org/licenses/MIT
 * Copyright (c) 2020 Waren Gonzaga
 *
 * Facebook: @warengonzagaofficial
 * Twitter: @warengonzaga
 * Github: @warengonzaga
 * Website: warengonzaga.com
 */

const{get:get}=require("request"),baseURL="https://developers.buymeacoffee.com/api/v1";class BMC{constructor(e){this.access_token=e}Supporters(e){this._sendRequest("supporters",e)}Subscriptions(e){this._sendRequest("subscriptions",e)}Extras(e){this._sendRequest("extras",e)}_sendRequest(e,s){get(`${baseURL}/${e}`,{auth:{bearer:this.access_token}},(function(e,t,r){!e&200===t.statusCode&&s(JSON.parse(r))}))}}module.exports=BMC;