# BuyMeaCoffee.JS

[![created by](https://img.shields.io/badge/created%20by-Waren%20Gonzaga-blue.svg?longCache=true&style=flat-square)](https://github.com/warengonzaga) [![release](https://img.shields.io/github/release/warengonzaga/buymeacoffee.js.svg?style=flat-square)](https://github.com/warengonzaga/buymeacoffee.js/releases) [![star](https://img.shields.io/github/stars/warengonzaga/buymeacoffee.js.svg?style=flat-square)](https://github.com/warengonzaga/buymeacoffee.js/stargazers) ![npm downloads](https://img.shields.io/npm/dt/buymeacoffee.js?color=red&style=flat-square) [![license](https://img.shields.io/github/license/warengonzaga/buymeacoffee.js.svg?style=flat-square)](https://github.com/warengonzaga/buymeacoffee.js/blob/main/LICENSE)

[![repo banner](https://ghrb.waren.build/banner?header=%21%5Bbuymeacoffee%5D+BuyMeaCoffee.js&subheader=Community-made+Bun-first+client&bg=FFDD00&color=000000&subheadercolor=000000)](https://buymeacoffee.js.org)

A simple and lightweight **community-made Bun-first client** for the **[Buy Me A Coffee](https://buymeacoff.ee/?via=WarenGonzaga) API** with **Node.js compatibility**.

## ⚡ Features

- Bun-first developer experience
- TypeScript typings included
- Supporters, subscriptions, and extras endpoints
- Pagination and subscription status filters
- By-id lookup methods for documented read endpoints
- Supports Bun and Node.js

## 📦 Installation

```bash
bun add buymeacoffee.js
```

```bash
npm install buymeacoffee.js
```

## 🧩 Usage

```ts
import BMC from "buymeacoffee.js";

const client = new BMC(process.env.BMC_ACCESS_TOKEN!);

const supporters = await client.Supporters();
const activeSubscriptions = await client.Subscriptions({ status: "active" });
const supporter = await client.Supporter(245731);
const extra = await client.Extra(30);
```

### Method Examples

```ts
import BMC from "buymeacoffee.js";

const client = new BMC(process.env.BMC_ACCESS_TOKEN!);

const supporters = await client.Supporters();
const supportersPageTwo = await client.Supporters({ page: 2 });

const supporter = await client.Supporter(245731);

const subscriptions = await client.Subscriptions();
const activeSubscriptions = await client.Subscriptions({ status: "active" });
const inactiveSubscriptionsPageTwo = await client.Subscriptions({
  page: 2,
  status: "inactive",
});

const subscription = await client.Subscription(10647);

const extras = await client.Extras();
const extrasPageTwo = await client.Extras({ page: 2 });

const extra = await client.Extra(30);
```

### Error Handling

```ts
import BMC, { BMCError } from "buymeacoffee.js";

const client = new BMC(process.env.BMC_ACCESS_TOKEN!);

try {
  await client.Subscriptions({ status: "active" });
} catch (error) {
  if (error instanceof BMCError) {
    console.error(error.status, error.endpoint, error.responseData);
  }
}
```

### API Surface

| Method | Description |
| --- | --- |
| `Supporters()` | Get the first page of supporters |
| `Supporters({ page })` | Get a specific supporters page |
| `Supporter(id)` | Get a supporter by ID |
| `Subscriptions()` | Get the first page of subscriptions |
| `Subscriptions({ page, status })` | Filter subscriptions by page and status |
| `Subscription(id)` | Get a subscription by ID |
| `Extras()` | Get the first page of extras |
| `Extras({ page })` | Get a specific extras page |
| `Extra(id)` | Get an extra purchase by ID |

## 🚀 Development

This project now uses Bun as the primary package manager, test runner, and local workflow.

```bash
bun install
bun run lint
bun test
bun run build
```

If you need a Node.js-only install for compatibility checks, `npm install` and `npm run build` still work.

The published package now includes declaration files for TypeScript consumers.

## 📖 Documentation

Check out the official and complete documentation here.

[![docs](https://img.shields.io/badge/docs-docs.warengonzaga.com/buymeacoffeejs-blue.svg?longCache=true&style=for-the-badge)](https://docs.warengonzaga.com/buymeacoffeejs)

## 🌏 Community

Join to the official Buy Me a Coffee Discord community server!

[![BMC Community](https://discordapp.com/api/guilds/750619856130539572/widget.png?style=banner3)](https://discord.gg/GFBQvyEJ98)

Join to my growing tech community and get the latest updates!

[![community](https://discordapp.com/api/guilds/1112058979238023272/widget.png?style=banner2)](https://go.waren.build/discord)

## 🎯 Contributing

Contributions are welcome, create a pull request to this repo and I will review
your code. Please consider to submit your pull request to the `dev` branch. Thank you!

Read the project's [contributing guide](https://github.com/warengonzaga/buymeacoffee.js/blob/main/CONTRIBUTING.md) for more info.

## 💬 Discussions

For any questions, suggestions, ideas, or simply you want to share your experience in using this project, feel free to share and discuss it to the [community](https://github.com/warengonzaga/buymeacoffee.js/discussions)!

## 🐛 Issues

Please report any issues and bugs by [creating a new issue here](https://github.com/warengonzaga/buymeacoffee.js/issues/new/choose), also make sure you're reporting an issue that doesn't exist. Any help to
improve the project would be appreciated. Thanks! 🙏✨

## 🙏 Sponsor

Like this project? Leave a star! ⭐⭐⭐⭐⭐

Want to support my work and get some perks? [Become a sponsor](https://github.com/sponsors/warengonzaga)! 💖

Or, you just love what I do? [Buy me a coffee](https://buymeacoffee.com/warengonzaga)! ☕

Recognized my open-source contributions? [Nominate me](https://stars.github.com/nominate) as GitHub Star! 💫

## 📋 Code of Conduct

Read the project's [code of conduct](https://github.com/warengonzaga/buymeacoffee.js/blob/main/CODE_OF_CONDUCT.md).

## 📃 License

This project is licensed under [MIT License](https://opensource.org/licenses/MIT).

## 📝 Author

This project is created by [Waren Gonzaga](https://github.com/warengonzaga), with the help of awesome [contributors](https://github.com/warengonzaga/buymeacoffee.js/graphs/contributors).

[![contributors](https://contrib.rocks/image?repo=warengonzaga/buymeacoffee.js)](https://github.com/warengonzaga/buymeacoffee.js/graphs/contributors)

---

💻💖☕ by [Waren Gonzaga](https://warengonzaga.com) | [YHWH](https://www.youtube.com/watch?v=VOZbswniA-g) 🙏 - Without _Him_, none of this exists, _even me_.
