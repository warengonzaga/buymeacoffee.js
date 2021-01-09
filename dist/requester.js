/*!
 * BuyMeACoffeeJS - https://github.com/WarenGonzaga/buymeacoffee.js#readme
 * A simple and lightweight but powerful Node.js client for Buy Me A Coffee API
 * Version: 1.0.8-beta.1
 * Github: https://github.com/WarenGonzaga/buymeacoffee.js
 * Licensed Under The MIT License: http://opensource.org/licenses/MIT
 * Copyright (c) 2020 Waren Gonzaga
 *
 * Facebook: @warengonzagaofficial
 * Twitter: @warengonzaga
 * Github: @warengonzaga
 * Website: warengonzaga.com
 */

"use strict";const axios=require("axios"),config=require("./config"),{baseURL:baseURL}=config,requester=axios.create({baseURL:baseURL,responseType:"json",validateStatus:e=>200===e});module.exports=requester;