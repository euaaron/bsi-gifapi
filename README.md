![Header](https://github.com/euaaron/bsi-gifapi/raw/main/assets/GIFAPI_Header.jpg)

[![repo-size](https://img.shields.io/github/repo-size/euaaron/bsi-gifapi?style=flat-square)](#) [![version](https://img.shields.io/github/package-json/v/euaaron/bsi-gifapi?color=orange&style=flat-square)](#) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE.md) [![last-commit](https://img.shields.io/github/last-commit/euaaron/bsi-gifapi?style=flat-square)](#) [![Vercel](https://vercelbadge.vercel.app/api/euaaron/bsi-gifapi?style=flat-square)](https://bsi-gifapi.vercel.app/)

## About

This is an academic project made to be presented during Semana do BSI event. The purpose of this API is to teach Node.js and Typescript basics by getting data from the internet, transforming it and sending it back to whoever called the API.

### How to get started

 1. Run `yarn` to install project dependencies
 2. Create a `.env` file (or just rename .env.example to .env) and fill it with a valid `GIPHY_KEY`. The other variables are optional at local environment.
 3. Run `yarn start` to start.
 4. Open your browser at `http://localhost:3000`
 5. Now you are all set to read the on screen Swagger documentation, learn how the API works and use it.

### Folder structure

- `api` - this is where the transformed code goes, and where Vercel will read the data to deploy our API
- `assets` - this is where I've put this README header, you can ignore this
- `coverage` - this folder is created when you run unit tests, you can open index.html from it to see how much of your code is beign covered by test
- `src` - this is where you code
- `.env` - this is where we set environment variables locally
- `package.json` - this is where our project is defined

### Scripts
- `prebuild` - this command will run automatically before `build` and it will delete api folder
- `build` - transforms typescript code from `src` folder to javascript and put it in `api` folder
- `postbuild` - this command will run automatically after `build` and it will delete all `.spec.js` files
- `prestart` - this command will run `build` automatically when you run `start`
- `start` - start application from `api` folder (.js)
- `dev` - starts application from `src` folder (.ts)
- `lint` - checks for code inconsistencies
- `test` - runs all unit tests from `src` folder

### ToDo

- [ ] find a way to deploy it without issues
