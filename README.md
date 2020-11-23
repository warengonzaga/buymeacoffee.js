# BuyMeACoffee.JS [![Developed by Waren Gonzaga](https://img.shields.io/badge/Developed%20by-Waren%20Gonzaga-blue.svg?longCache=true&style=for-the-badge)](https://github.com/warengonzaga)

![Version](https://img.shields.io/github/release/WarenGonzaga/buymeacoffee.js.svg?style=for-the-badge) ![Stars](https://img.shields.io/github/stars/WarenGonzaga/buymeacoffee.js.svg?style=for-the-badge) ![Size](https://img.shields.io/github/size/warengonzaga/buymeacoffee.js/dist/index.js?color=green&style=for-the-badge) ![NPM](https://img.shields.io/npm/dm/buymeacoffee.js?color=red&style=for-the-badge) ![License](https://img.shields.io/github/license/WarenGonzaga/buymeacoffee.js.svg?style=for-the-badge)

![Github Banner](.github/img/buymeacoffeejs-github-banner.jpg)

A simple and lightweight but powerful Node.js client for [Buy Me A Coffee](https://buymeacoff.ee/?via=WarenGonzaga) API.

[![IssueHunt](https://issuehunt.io/static/embed/issuehunt-button-v1.svg)](https://issuehunt.io/r/WarenGonzaga/buymeacoffee.js)

## What is Buy Me A Coffee

Buy Me a Coffee is a simple, meaningful way to fund your creative work.

Without stitching together a bunch of apps like Patreon, Mailchimp, and a donate button — you can accept support, memberships, and build a direct relationship with your fans. [Create your account here](https://buymeacoff.ee/?via=WarenGonzaga).

## Features

- Simple
- Lightweight
- Supporters Data
- Subscriptions Data
- Extras Data
- Supports NodeJS v10+ LTS

(Read the [Official Docs](http://developers.buymeacoffee.com))

[![Rate on Openbase](https://badges.openbase.io/js/rating/buymeacoffee.js.svg)](https://openbase.io/js/buymeacoffee.js?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

## Installation

```bash
npm install buymeacoffee.js
```

## Usage

First [get your personal access token here](http://developers.buymeacoffee.com/dashboard), then create a ``coffee.json`` file and save your personal access token inside. Example below.

```json
{
    "token":"access_token_here"
}
```

After that, create your Javascript file. Example below.

```js
const BMC = require('buymeacoffee.js'); // add BMC package
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

---

## Used By

- _[timbenniks2020-nuxt](https://github.com/timbenniks/timbenniks2020-nuxt)_
- _Your project goes here_

> Wanna see your project here? Let us know!

## Related Projects

- _[buymeacoffee-cli](https://github.com/warengonzaga/buymeacoffee-cli)_ (work in progress)
- _[buymeacoffee-wp](https://github.com/warengonzaga/buymeacoffee-wp)_ (work in progress)
- _[bmc-music-bot](https://github.com/warengonzaga/bmc-music-bot)_ (work in progress)
- _[bmc-updates-bot](https://github.com/warengonzaga/bmc-updates-bot)_ (work in progress)
- _[bmc-mod-bot](https://github.com/warengonzaga/bmc-mod-bot)_ (work in progress)

## Badges

If your project uses buymeacoffee.js then you can add any of the following badges below to your project's readme file. For the badges I use [Shields.io](https://shields.io) API to create a custom badges for READMEs.

---

### Flat Style

[![BuyMeACoffee.JS](https://img.shields.io/badge/BuyMeACoffee.JS-%23ffdd00.svg?&style=flat&logo=buy-me-a-coffee&logoColor=black)](https://github.com/warengonzaga/buymeacoffee.js)

<!-- markdownlint-disable MD033 -->

<details>
    <summary>Copy the Codes</summary>

> **Markdown**
>
>```markdown
>[![BuyMeACoffee.JS](https://img.shields.io/badge/BuyMeACoffee.JS-%23ffdd00.svg?&style=flat&logo=buy-me-a-coffee&logoColor=black)](https://github.com/warengonzaga/buymeacoffee.js)
>```
>
> **HTML**
>
>```html
><a href="https://github.com/warengonzaga/buymeacoffee.js"><img src="https://img.shields.io/badge/BuyMeACoffee.JS-%23ffdd00.svg?&style=flat&logo=buy-me-a-coffee&logoColor=black" alt="BuyMeACoffee.JS"></a>
>```

</details>

---

### Plastic Style

[![BuyMeACoffee.JS](https://img.shields.io/badge/BuyMeACoffee.JS-%23ffdd00.svg?&style=plastic&logo=buy-me-a-coffee&logoColor=black)](https://github.com/warengonzaga/buymeacoffee.js)

<details>
    <summary>Copy the Codes</summary>

> **Markdown**
>
>```markdown
>[![BuyMeACoffee.JS](https://img.shields.io/badge/BuyMeACoffee.JS-%23ffdd00.svg?&style=plastic&logo=buy-me-a-coffee&logoColor=black)](https://github.com/warengonzaga/buymeacoffee.js)
>```
>
> **HTML**
>
>```html
><a href="https://github.com/warengonzaga/buymeacoffee.js"><img src="https://img.shields.io/badge/BuyMeACoffee.JS-%23ffdd00.svg?&style=plastic&logo=buy-me-a-coffee&logoColor=black" alt="BuyMeACoffee.JS"></a>
>```

</details>

---

### Flat Square Style

[![BuyMeACoffee.JS](https://img.shields.io/badge/BuyMeACoffee.JS-%23ffdd00.svg?&style=flat-square&logo=buy-me-a-coffee&logoColor=black)](https://github.com/warengonzaga/buymeacoffee.js)

<details>
    <summary>Copy the Codes</summary>

> **Markdown**
>
>```markdown
>[![BuyMeACoffee.JS](https://img.shields.io/badge/BuyMeACoffee.JS-%23ffdd00.svg?&style=flat-square&logo=buy-me-a-coffee&logoColor=black)](https://github.com/warengonzaga/buymeacoffee.js)
>```
>
> **HTML**
>
>```html
><a href="https://github.com/warengonzaga/buymeacoffee.js"><img src="https://img.shields.io/badge/BuyMeACoffee.JS-%23ffdd00.svg?&style=flat-square&logo=buy-me-a-coffee&logoColor=black" alt="BuyMeACoffee.JS"></a>
>```

</details>

---

### For The Badge Style

[![BuyMeACoffee.JS](https://img.shields.io/badge/BuyMeACoffee.JS-%23ffdd00.svg?&style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://github.com/warengonzaga/buymeacoffee.js)

<details>
    <summary>Copy the Codes</summary>

> **Markdown**
>
>```markdown
>[![BuyMeACoffee.JS](https://img.shields.io/badge/BuyMeACoffee.JS-%23ffdd00.svg?&style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://github.com/warengonzaga/buymeacoffee.js)
>```
>
> **HTML**
>
>```html
><a href="https://github.com/warengonzaga/buymeacoffee.js"><img src="https://img.shields.io/badge/BuyMeACoffee.JS-%23ffdd00.svg?&style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="BuyMeACoffee.JS"></a>
>```

</details>

<!-- markdownlint-enable MD033 -->

---

## Contributing

Contributions are welcome, create a pull request to this repo and I will review your code. Please consider to submit your pull request to the ```dev``` branch. Thank you!

## Issues

If you're facing a problem in using BuyMeACoffeeJS please let me know by creating an issue in this github repository. I'm happy to help you! Don't forget to provide me some screenshot or error logs of it, thank you!

## Community

Wanna see other projects I made? Join today and become a member!

[![Community](https://discordapp.com/api/guilds/659684980137656340/widget.png?style=banner1)](https://bmc.xyz/warengonzaga)

## Donate, Support or Fund

If you love this project please consider to donate or support the development by means of coffee. You may also fund this project to maintain active and close more issues. Just a cup of coffee is enough to appreciate our hardwork.

[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=for-the-badge)](https://paypal.me/warengonzagaofficial) [![Support](https://img.shields.io/badge/Support-Buy%20Me%20A%20Coffee-orange.svg?style=for-the-badge)](https://bmc.xyz/warengonzaga) [![Fund](https://img.shields.io/badge/Fund-IssueHunt-%2300A156.svg?style=for-the-badge)](https://issuehunt.io/r/WarenGonzaga/buymeacoffee.js)

## License

BuyMeACoffeeJS is licensed under MIT - <https://opensource.org/licenses/MIT>

## Author

BuyMeACoffeeJS is Developed and Maintained by **[Waren Gonzaga](https://github.com/warengonzaga)**

[![Facebook](https://img.shields.io/badge/facebook-%231877F2.svg?&style=for-the-badge&logo=facebook&logoColor=white)](https://facebook.com/warengonzagaofficial) [![Twitter](https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/warengonzaga) [![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/warengonzagaofficial) [![YouTube](https://img.shields.io/badge/youtube-%23FF0000.svg?&style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/warengonzaga) [![DEV](https://img.shields.io/badge/DEV-%23000000.svg?&style=for-the-badge&logo=dev.to&logoColor=white)](https://dev.to/warengonzaga)

---

:computer: Made with :heart: and :coffee: by Waren Gonzaga with **YHWH** :pray:
