# ➡️ Getting Started

[koagsa](/) is a Personal Discord Bot for My Private Discord Server.

## ⛔ Warnings

Some warnings, If you're Under age, Don't trying to run / test this bot by yourself! There is so many NSFW command (like lewd, nudity commands, etc). And if you're over 18 years old, use it at your own risk.

## ❓ Purpose

Why i'm building this bot?

Because i want. And Discord Bots is your best helper at Discord! There's so many amazing things to do with discord bots. You can doing, checking anything you want just by running a command. And the bot will do it for you. Same with me. At this project, I'm building this Discord bot to helps me at my private server. Like translating a text, Inserting a Data to Database, and many more!

## ➡️ Installing

To Getting started, You need to doing some steps. Here is it!

### 📥 Clone this Repository

```sh
$ git clone https://github.com/gifaldyazkaa/koagsa-dscbot.git
$ cd koagsa-dscbot
```

### 📦 Install all required dependecies

```sh
# With yarn
$ yarn install

# With pnpm
$ pnpm install

# With npm
$ npm install
```

### 📄 Copy and create Environment Variables

```sh
# Linux / macOS
$ cp .env.example .env

# Windows
> copy .env.example .env
```

### 📝 Fill all required field at .env

```
TOKEN="YOUR BOT TOKEN"
PREFIX="YOUR PREFIX"
MONGOURI="YOUR MONGO CONNECTION STRING"
TESTSERVER="YOUR TEST SERVER ID"
OWNERID="YOUR DISCORD ACCOUNT ID"
ORIGIN_CHANNEL="YOUR ORIGIN CHANNEL ID"
UPLOAD_CHANNEL="YOUR UPLOAD CHANNEL ID"
```

### 🏃 Start the bot

```bash
# Using yarn
$ yarn start

# Using dum
$ yarn dum
```

### 🎉 You should be ready to go!

## 📃 Available Scripts

Available Scripts that defined at [package.json]()

| Name           | Description                                |
| -------------- | ------------------------------------------ |
| `start`        | Start the bot                              |
| `dev`          | Start the bot in Development mode          |
| `build`        | Build the source code into JavaScript Code |
| `lint`         | Lint the source code with ESLint           |
| `format`       | Format the source code with Prettier       |
| `check-format` | Check formatting with Prettier             |

## 📂 Folder Structure

```
. <---------------- Root Folder
├── .github <------ GitHub Repository Configuration
├── docs <--------- Documentation Folder
└── src <---------- Source File
   ├── Client <---- Client Folder
   ├── Commands <-- Commands Folder
   ├── Data <------ Custom Data Folder
   ├── Events<----- Events Folder
   ├── index.ts <-- Main File
   ├── interfaces < TypeScript Interfaces
   ├── Schema <---- Database Schema
   └── Slash <----- Slash Commands Folder
```
