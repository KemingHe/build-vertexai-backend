# TypeScript x Express Backend for the VertexAI Web App

- Author: [Keming He](https://github.com/keminghe)
- Contact:[keminghe.business@gmail.com](mailto:keminghe.business@gmail.com?subject=Hi,_I'm_[name],_Let's_Connect)
- Version: 2024.02.23

> [!TIP]
> This repo has much more hidden underneath its surface, including:
> - Deployment to Google Cloud[^1]
> - CI/CD workflow through GitHub Actions[^2]
> - Py3-specific (VertexAI) SDK integration[^3]
> - Automated **Unit Testing** through Jest[^4]
> - Automated **Behavior/Feature Testing** through Cucumber[^5]
> - And **MOST IMPORTANTLY**, getting everything to work together under TypeScript[^6]

[^1]: Google Cloud Deploy: https://cloud.google.com/deploy
[^2]: GitHub Actions Quickstart: https://docs.github.com/en/actions/quickstart
[^3]: Google Vertex AI Python SDK: https://cloud.google.com/vertex-ai/docs/python-sdk/use-vertex-ai-python-sdk
[^4]: TS-Jest, a Jest transformer with full TS support: https://kulshekhar.github.io/ts-jest/docs
[^5]: With my magic, (CommonJS) Cucumber-JS can work with (ES) TS apps, too: https://cucumber.io/docs/installation/javascript
[^6]: TS is the secure future of web dev: https://www.typescriptlang.org/

## Forward Credits

> [!WARNING]
> TODO

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
npm install
```

### How to run

```bash
npm start
```

### See all the tests

```bash
npm run test
```

Have fun exploring!

