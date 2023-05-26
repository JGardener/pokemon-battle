# Pokémon Battle

1. Pick Pokémon.
2. Pick enemy Pokémon.
3. Battle them.

A Pokémon battle game built in React with Typescript. Initialised with Vite. 

Vite: https://vitejs.dev/ <br>
React: https://react.dev/ <br>
Typescript: https://www.typescriptlang.org/ <br>

The purpose of this project is to learn Typescript and React through practice.

* * *

## Contents

- [Pokémon Battle](#pokémon-battle)
  - [Contents](#contents)
  - [Installation / Run](#installation--run)
  - [API](#api)
  - [Formatting](#formatting)
    - [Pre-commit hook](#pre-commit-hook)
  - [Branch Protection](#branch-protection)

* * *

## Installation / Run

npm install <br>
npm run start

* * *

## API

Gracefully provided, for free, by PokéAPI. Without them, this project would not work. 

Check it out here: *https://pokeapi.co/*

* * *

## Formatting

This repo runs Prettier for code-formatting. The rules for Prettier can be found in the .prettierrc.json file. 
> If a pull request is made containing changes to any config or ignore files, the PR will be rejected.  

### Pre-commit hook

A pre-commit hook is used by Husky and will format all .ts and .tsx files upon committing. Nothing needs to be done manually by you.

* * *

## Branch Protection

By default ***main*** is protected and you cannot push to it directly. Make a branch, add your code, then make a pull request for review. 