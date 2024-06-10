// keygen.ts
import { Keypair } from '@solana/web3.js';
import * as fs from 'fs';

const keypair = Keypair.generate();
const secretKey = keypair.secretKey;
const publicKey = keypair.publicKey.toBase58();

fs.writeFileSync('wallet.json', JSON.stringify(Array.from(secretKey)));
console.log(`Public Key: ${publicKey}`);