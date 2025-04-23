/**
 * create-token-simple.js
 *
 * Enhanced version to automatically create tokens on Solana with partner wallet support.
 * Run with: node create-token-simple.js
 */

const { createTokenSimple } = require("mintme-sdk");

async function main() {
  try {
    // Configuration with partner wallet support
    const config = {
      // Token Information
      tokenName: "MTM",
      tokenSymbol: "MTM",
      uniqueKey: Date.now().toString(),
      decimals: 9,
      initialSupply: 1000000,
      uri: "https://ipfs.mintme.dev/metadata.json",
      
      // Token Authorities
      revokeMint: true,
      revokeFreeze: true,
      
      // Partner Configuration (optional) / This account will get a direct transfer for comission
      // Replace with actual partner wallet address if you want get a transfer comission for the use
      // partnerWallet: "YOUR_WALLET_HERE",
      // // Amount in SOL to send to partner wallet if is 0 don't will do nothing
      // partnerAmount: 0.001,
      
      // Wallet and Network Configuration
      walletPath: "./wallet.json",
      connection: "https://api.devnet.solana.com",
      cluster: "devnet",
    };

    console.log("=== MINTING TOKEN ===");
    console.log("Token Name:", config.tokenName);
    console.log("Token Symbol:", config.tokenSymbol);
    console.log("Decimals:", config.decimals);
    console.log("Initial Supply:", config.initialSupply);
    console.log("Network:", config.cluster);
    console.log("Partner Wallet:", config.partnerWallet);
    console.log("Partner Amount:", config.partnerAmount, "SOL");
    console.log("=====================================");

    // Create token using mintme-sdk
    console.log("Creating token...");
    const result = await createTokenSimple(config);

    if (result.success) {
      console.log("\n✅ TOKEN CREATED SUCCESSFULLY");
      console.log("Token Mint Address:", result.mint);
      console.log("Token Account:", result.tokenAccount);
      console.log("Transaction Signature:", result.txSignature);
      
      // Generate explorer links
      const txExplorerUrl = `https://explorer.solana.com/tx/${result.txSignature}?cluster=${config.cluster}`;
      const tokenExplorerUrl = `https://explorer.solana.com/address/${result.mint}?cluster=${config.cluster}`;
      
      console.log("\n🔍 EXPLORER LINKS");
      console.log(`Transaction: ${txExplorerUrl}`);
      console.log(`Token: ${tokenExplorerUrl}`);
      
      // Partner payment confirmation
      if (config.partnerAmount > 0) {
        console.log(`\n💰 Partner payment of ${config.partnerAmount} SOL sent to ${config.partnerWallet}`);
      }
    } else {
      console.error("\n❌ Error creating the token:", result.error);
      if (result.details) {
        console.error("Details:", JSON.stringify(result.details, null, 2));
      }
      process.exit(1);
    }
  } catch (error) {
    console.error("Fatal error:", error);
    console.error("Stack trace:", error.stack);
    process.exit(1);
  }
}

// Run the main function
main();