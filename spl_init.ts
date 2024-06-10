import { Connection, clusterApiUrl, Keypair } from '@solana/web3.js';
import { createMint } from '@solana/spl-token';
import * as fs from 'fs';

// Leggi il file wallet.json
const wallet = JSON.parse(fs.readFileSync('wallet.json', 'utf8'));
const secretKey = Uint8Array.from(wallet);
const keypair = Keypair.fromSecretKey(secretKey);

const connection = new Connection(clusterApiUrl('devnet'));

(async () => {
  const mint = await createMint(connection, keypair, keypair.publicKey, null, 9); // 9 decimal places
  fs.writeFileSync('mint.json', JSON.stringify(mint.toBase58()));
  console.log('Mint created:', mint.toBase58());
})();