# BuyMeACoffee.JS [![Developed by Waren Gonzaga](https://img.shields.io/badge/Developed%20by-Waren%20Gonzaga-blue.svg?longCache=true&style=for-the-badge)](https://github.com/warengonzaga)

[![GitHub Version](https://img.shields.io/github/release/WarenGonzaga/buymeacoffee.js.svg?style=for-the-badge)](https://github.com/WarenGonzaga/buymeacoffee.js/) [![Github Star](https://img.shields.io/github/stars/WarenGonzaga/buymeacoffee.js.svg?style=for-the-badge)](https://github.com/WarenGonzaga/buymeacoffee.js) [![Github Fork](https://img.shields.io/github/forks/WarenGonzaga/buymeacoffee.js.svg?style=for-the-badge)](https://github.com/WarenGonzaga/buymeacoffee.js) [![License](https://img.shields.io/github/license/WarenGonzaga/buymeacoffee.js.svg?style=for-the-badge)](https://github.com/WarenGonzaga/buymeacoffee.js)

![Github Banner](.github/img/buymeacoffeejs-github-banner.jpg)

A simple and lightweight but powerful Node.js client for [Buy Me A Coffee](https://buymeacoff.ee/?via=WarenGonzaga) API.

## What is Buy Me A Coffee

Buy Me a Coffee is a simple, meaningful way to fund your creative work.

Without stitching together a bunch of apps like Patreon, Mailchimp, and a donate button — you can accept support, memberships, and build a direct relationship with your fans. [Create your account here](https://buymeacoff.ee/?via=WarenGonzaga).

## Features

- Simple
- Lightweight
- Supporters Data
- Subscriptions Data
- Extras Data

(Read the [Official Docs](http://developers.buymeacoffee.com))

## Usage

First [get your personal access token here](http://developers.buymeacoffee.com/dashboard), then create a ``coffee.json`` file and save your personal access token inside. Example below.

```json
{
    "token":"access_token_here"
}
```

After that, create your Javascript file. Example below.

```js
const access = require('./coffee.json'); // load your token
const coffee = new BMC(access.token); // add your token here

// retrieve supporters data
coffee.Supporters((data) => {
    console.log(data);
});

// retrieve subscribers data
coffee.Subscriptions((data) => {
    console.log(data);
});

// retrieve extras data
coffee.Extras((data) => {
    console.log(data);
});
```

You can play with the data and get specific information such as supporter name. Example below.

```js
coffee.Supporters((data) => {
    data = data.data[0].supporter_name;
    console.log(data);
});
```

I will add more features to this API Client as soon as I have time working on it.

## Contributing

Contributions are welcome, create a pull request to this repo and I will review your code. Please consider to submit your pull request to the ```dev``` branch. Thank you!

## Issues

If you're facing a problem in using BuyMeACoffeeJS please let me know by creating an issue in this github repository. I'm happy to help you! Don't forget to provide me some screenshot or error logs of it, thank you!

## To Do

- Advance way to retrieve data.
- Improve development.
- Add CI to this project.

## Community

Unofficial Discord Server

[![BuyMeACoffee](https://discordapp.com/api/guilds/764424624032841748/widget.png?style=banner1)](https://discord.link/buymeacoffee)

Wanna see other projects I made? Join today!

[![Community](https://discordapp.com/api/guilds/659684980137656340/widget.png?style=banner2)](https://discord.io/warengonzaga) [![Tracker CLI](https://discordapp.com/api/guilds/694612151444439081/widget.png?style=banner2)](https://discord.io/trackercli)

## Donate or Support

If you love this project please consider to support the development by means of coffee. I spend and waste my time just to save your time! Be a sponsor or backer of this project today. Just a cup of coffee!

[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=for-the-badge)](https://paypal.me/warengonzagaofficial) [![Support](https://img.shields.io/badge/Support-Buy%20Me%20A%20Coffee-orange.svg?style=for-the-badge)](https://buymeacoff.ee/warengonzaga)

## License

BuyMeACoffeeJS is licensed under MIT - <https://opensource.org/licenses/MIT>

## Author

BuyMeACoffeeJS is Developed and Maintained by **[Waren Gonzaga](https://github.com/warengonzaga)**

[![Facebook](https://img.shields.io/badge/facebook-%231877F2.svg?&style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/warengonzagaofficial) [![Twitter](https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/warengonzaga) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/warengonzagaofficial) [![YouTube](https://img.shields.io/badge/youtube-%23FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/warengonzaga)

---

:computer: Made with :heart: and :coffee: by Waren Gonzaga with **YHWH** :pray:
