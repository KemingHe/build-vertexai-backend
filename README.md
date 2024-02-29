# TypeScript x Express Backend for the VertexAI Web App

- Author: [Keming He](https://github.com/keminghe)
- Contact: [keminghe.business@gmail.com](mailto:keminghe.business@gmail.com?subject=Hi,_I'm_[name],_Let's_Connect)
- Version: 2024.02.29

> [!TIP]
> This repo has much more hidden underneath its surface, including:
> - CI/CD through Google Cloud Run[^1]
> - Automated **Unit Testing** through Jest[^2]
> - Automated **Behavior/Feature Testing** through Cucumber[^3]

[^1]: https://cloud.google.com/run/docs/overview/what-is-cloud-run
[^2]: TS-Jest, a Jest transformer with full TS support: https://kulshekhar.github.io/ts-jest/docs
[^3]: Through cucumber-tsflow, (CommonJS) Cucumber-JS can work with (ES) TS apps, too: https://github.com/timjroberts/cucumber-js-tsflow

## Forward Credits

> [!WARNING]
> TODOs:
> 1. Before continue coding this backend, try to run original backend and learning their API design;
> 2. Before building the frontend, finish API design and confirm use cases once again;
> 3. Buy frontend dev resources, don't code anything yourself;
> 4. General rule of thumb: ask questions and plan before code.
> Also add REST API support (using Hoppscotch and Hapi.js, with TS support).

## Getting Started

### Initial Setup

0. Make sure you have the latest [Node.js](nodejs.org) installed, using [NVM](https://github.com/nvm-sh/nvm) is recommended;

1. (Fork and) Clone this public repo to your local machine:

```bash
git clone https://github.com/KemingHe/build-node-vertexai.git
cd build-node-vertexai/
```

2. Install dependencies:

```bash
npm install && npm update
```

### How to build and run

```bash
npm run build && npm start
```
Have fun exploring!

