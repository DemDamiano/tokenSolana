// airdrop.ts
import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import * as fs from 'fs';

const connection = new Connection("https://api.devnet.solana.com", "finalized");


const secretKey = Uint8Array.from(JSON.parse(fs.readFileSync('wallet.json', 'utf8')));
const keypair = Keypair.fromSecretKey(secretKey);

const airdrop = async () => {
    const signature = await connection.requestAirdrop(keypair.publicKey, 1e9); // 1 SOL
    await connection.confirmTransaction(signature);
    console.log(`Airdrop completed: ${signature}`);
};

airdrop();