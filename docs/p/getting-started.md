# ➡️ Getting Started

[Kogasa](/) is a Maid and Helper for My Private Discord Server ☂️.

## ⛔ Warnings

**This Discord Bot Source Code and It's Feature contains NSFW Features**. If you're under age, I'm not recommending you to clone and try this repository. I have noticed you okay~, **Use it at own risks!**

## ❓ Purpose

Why i'm building this bot?

Discord Bots is your best helper at Discord! There's so many amazing things to do with discord bots. You can doing, checking anything you want just by running a command. And the bots will do it for you. Same with me! At this project, I'm building this Discord Bot to helps me at My Private Server. Like Inserting a Data to Database, Fetching an Images from APIs, and many more!

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
