# MintMe Easy Node Example

This repository provides a simple example for interacting with the MintMe SDK to perform basic operations such as generating a `wallet.json`, creating a token, and customizing settings. This example is designed to be user-friendly and customizable for different environments.

## Steps to Get Started

### 1. Install the MintMe SDK

First, install the MintMe SDK in your project using npm:

```bash
npm i mintme-sdk
```

### 2. Generate `wallet.json`

The `wallet.json` file is essential for interacting with the blockchain. You can generate it by running the following command:

```bash
node tests/create-wallet-json.js
```

### 3. Create a Token

After generating the `wallet.json`, you can proceed to create a token by using the following command:

```bash
node tests/test-create-token-simple.js
```

### Customization

#### 1. Change the `walletPath`

You can customize the path to the `wallet.json` file by changing the `walletPath` value in the scripts.

#### 2. Configure Custom Connection

If you want to use a custom RPC or a specific cluster, you can modify the values of `connection` and `cluster` in the scripts. This ensures that all operations are performed in the correct environment.

## Requirements

- Node.js 14 or higher
- npm

## Contributions

This repository is a basic example to guide developers in integrating the MintMe SDK. Contributions are welcome to improve and expand the functionalities of the example.

Explore and create tokens easily with the MintMe SDK!
