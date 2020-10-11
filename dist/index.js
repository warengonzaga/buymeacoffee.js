/*!
 * BuyMeACoffeeJS - https://github.com/WarenGonzaga/buymeacoffee.js#readme
 * A simple and lightweight but powerful Node.js client for Buy Me A Coffee API
 * Version: 1.0.0-beta.1
 * Github: https://github.com/WarenGonzaga/buymeacoffee.js
 * Licensed Under The MIT License: http://opensource.org/licenses/MIT
 * Copyright (c) 2020 Waren Gonzaga
 *
 * Facebook: @warengonzagaofficial
 * Twitter: @warengonzaga
 * Github: @warengonzaga
 * Website: warengonzaga.com
 */

const{get:get}=require("request"),baseURL="https://developers.buymeacoffee.com/api/v1";class BMC{constructor(s){this.access_token=s}Supporters(s){this._sendRequest("supporters",s)}Subscriptions(s){this._sendRequest("subscriptions",s)}Extras(s){this._sendRequest("extras",s)}_sendRequest(s,e){get(`${baseURL}/${s}`,{auth:{bearer:this.access_token}},(function(s,t,r){!s&200===t.statusCode&&e(JSON.parse(r))}))}}