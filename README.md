# MintMe Easy Node Example

This repository provides a simple example for interacting with the MintMe SDK to perform basic operations such as generating a `wallet.json`, creating a token, and customizing settings. This example is designed to be user-friendly and customizable for different environments.

## Steps to Get Started


### Bonus: Run example code in Codesandbox.io 💡
You can run this code directly in Codesandbox.io in your own virtual machine.
- **Codesandbox.io Template Mintme Node Example**: [https://codesandbox.io/p/devbox/template-mintme-easy-node-example-hgpt49](https://codesandbox.io/p/devbox/template-mintme-easy-node-example-hgpt49)

  
### 1. Install the MintMe SDK

First, install the MintMe SDK in your project using npm:

```bash
npm i mintme-sdk
```

### 2. Generate `wallet.json`

The `wallet.json` file is essential for interacting with the blockchain. You can generate it by running the following. Update `tests/create-wallet-json.js` and put your private key in the file and run this command:

```bash
node tests/create-wallet-json.js
```

Never share your private key and wallet.json.

### 3. Create a Token

After generating the `wallet.json`, you can proceed to create a token by using the following command:

```bash
node tests/test-create-token-simple.js
```

### Result token mint

```json
{
  "success": true,
  "mint": "9oQ7p64wbgCSTutrJYvELSEHvnYjxknjRsUUcucLWeWn",
  "tokenAccount": "4naaCDoc2rMr3RXytWpfngPdhWbwq5bsfa3CxewKFP2W",
  "metadata": "CRkWpoDEUmTqVt8Thfn8dzkeFfELzBhkhtJ1PMkjSEih",
  "txSignature": "44jYnKZWK26QLwcreGe8ww7zKrSPivGinj8vWeYqF6BQopJQi3Uy3MhUosnHQTSj1fjs4yv6jXP8ftxz9e6jPfhu",
  "tokenName": "MTM",
  "tokenSymbol": "MTM",
  "freezeRevoked": true,
  "freezeRevokeTx": "2AaTZapdS9bKeY3gcuC9b9a3euidXmVJ65VAPrdoHbLgHJ3X14WUmwcf7bJnEBJWgooHNxbUgGxkjgUiHdchT1WD"
}
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
