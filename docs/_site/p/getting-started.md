# Getting Started

[shiroko](/) is a Personal Discord Bot for My Private Discord Server.

## Warnings

Some warnings, If you're Under age, Don't trying to run / test this bot by yourself! There is so many NSFW command (like lewd, nudity commands, etc). And if you're over 18 years old, use it at your own risk.

## Purpose

Why i'm building this bot?

Because i want. And Discord Bots is your best helper at Discord! There's so many amazing things to do with discord bots. You can doing, checking anything you want just by running a command. And the bot will do it for you. Same with me. At this project, I'm building this Discord bot to helps me at my private server. Like translating a text, Inserting a Data to Database, and many more!

## Installing

To Getting started, You need to doing some steps. Here is it!

### Clone this Repository

```sh
$ git clone https://github.com/gifaldyazkaa/shiroko-dscbot.git
$ cd shiroko-dscbot
```

### Install required dependecies

- Yarn (Recommended)

```sh
$ yarn install
```

- Or if you want to using npm

```sh
$ npm install
```

- Or if you want to using pnpm

```sh
$ pnpm install
```

### Copy and create Environment Variables

```sh
$ cp .env.example .env
```

### Fill all required field at .env

```
TOKEN=your_discord_bot_token
MONGO_URI=your_mongodb_uri
PREFIX=your_discord_bot_prefix
ORIGIN_CHANNEL=your_link_upload_discord_channel_id
UPLOAD_CHANNEL=your_upload_discord_channel_id
```

### Start the bot

```bash
# Start in normal mode
$ yarn start
# Start in development mode
$ yarn run dev
```

### You should be ready to go!
