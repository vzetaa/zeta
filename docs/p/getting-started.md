# ➡️ Getting Started

[Koyori](/) is a Maid and Helper for My Private Discord Server 🧪

## ⛔ Warnings

**This Discord Bot Source Code and It's Feature contains NSFW Features**. If you're under age, I'm not recommending you to clone and try this repository. I have noticed you okay~, **Use it at own risks!**

## ❓ Purpose

Why i'm building this bot?

[Koyori](https://twitter.com/hakuikoyori) is soo adorable and cute 🥰 _(KOYORI KOYORIIIIIIIIIII AAAAAAAAAAAAAAAAAAAAAAAGH ❤ ❤ ❤ ❤ WANGI WANGI WANGI WANGI HU HA HU HA HU HA)_. My diabetes and my simp level is soo high right now. So, I've decided to build this bot :3. Simple reasons right?

## ➡️ Installing

### 📥 Clone this Repository

```sh
# Using Git
$ git clone https://github.com/gifaldyazkaa/koyori-dscbot.git
$ cd koyori-dscbot

# GitHub CLI
$ gh repo clone gifaldyazkaa/koyori-dscbot
$ cd koyori-dscbot
```

### 📦 Install all required dependencies

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

Available scripts that defined at [package.json](https://github.com/gifaldyazkaa/kogasa-dscbot/blob/master/package.json)

| Name            | Script         | Description                                |
| --------------- | -------------- | ------------------------------------------ |
| Start           | `start`        | Start the bot                              |
| Development     | `dev`          | Start the bot in Development mode          |
| CI Testing      | `ci`           | Start CI Testing Process                   |
| Build           | `build`        | Build the source code into JavaScript Code |
| Native Build    | `build:native` | Native build using `tsc`                   |
| Linters         | `lint`         | Lint the source code with ESLint           |
| Code Format     | `format`       | Format the source code with Prettier       |
| Format Checking | `check-format` | Check formatting with Prettier             |

## 📂 Folder Structure

```
. <---------------- Root Folder
├── .github <------ GitHub CI & Dependabot Config
├── docs <--------- Documentation Folder
└── src <---------- Source File
   ├── Bin <------- Binaries Folder
   ├── Client <---- Client Folder
   ├── Commands <-- Commands Folder
   ├── Data <------ Custom Data Folder
   ├── Events<----- Events Folder
   ├── index.ts <-- Main File
   ├── Interfaces < TypeScript Interfaces
   ├── Schema <---- Database Schema
   └── Slash <----- Slash Commands Folder
```
