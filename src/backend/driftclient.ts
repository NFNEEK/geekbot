import { DriftClient, DriftEnv } from "@drift-labs/sdk";
import { Keypair } from "@solana/web3.js";

const keypair = Keypair.fromSecretKey(new Uint8Array([])); // Provide

const driftClient = new DriftClient({
  env: DriftEnv.DEV,
  keypair,
});

export default driftClient;
