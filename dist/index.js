/*!
 * BuyMeaCoffeeJS - https://docs.warengonzaga.com/buymeacoffeejs
 * A simple and lightweight but powerful Node.js client for Buy Me A Coffee API
 * Version: 1.2.1
 * Github: https://github.com/WarenGonzaga/buymeacoffee.js
 * Licensed under The MIT License: http://opensource.org/licenses/MIT
 * Copyright (c) 2021 Waren Gonzaga
 *
 * Facebook: @warengonzagaofficial
 * Twitter: @warengonzaga
 * Github: @warengonzaga
 * Website: warengonzaga.com
 */

const requester=require("./requester");class BMC{constructor(e){this.access_token=e}Supporters(){return this._sendRequest("supporters")}Subscriptions(){return this._sendRequest("subscriptions")}Extras(){return this._sendRequest("extras")}async _sendRequest(e){return(await requester.get(e,{headers:{Authorization:"Bearer "+this.access_token},validateStatus:function(e){return e>=200&&e<300}})).data}}module.exports=BMC;