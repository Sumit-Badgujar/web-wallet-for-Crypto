import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

export function SolanaWallet({ mnemonic }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [wallets, setWallets] = useState([]);

    function generateWallet() {
        const seed = mnemonicToSeed(mnemonic);
        const path = `m/44'/501'/${currentIndex}'/0'`;
        const derivedSeed = derivePath(path, seed.toString("hex")).key;
        const keypair = Keypair.fromSecretKey(nacl.sign.keyPair.fromSeed(derivedSeed).secretKey);
        setCurrentIndex(currentIndex + 1);
        setWallets([...wallets, { publicKey: keypair.publicKey, secretKey: keypair.secretKey }]);
    }

    function togglePrivateKeyVisibility(index) {
        setWallets(wallets.map((wallet, i) =>
            i === index ? { ...wallet, showSecret: !wallet.showSecret } : wallet
        ));
    }

    return (
        <div className="p-5 max-w-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-black">Solana Wallet</h1>
                <button
                    onClick={generateWallet}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
                >
                    Add Wallet
                </button>
            </div>
            {wallets.map((wallet, index) => (
                <div
                    key={index}
                    className="mb-4 p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-md transition-transform transform hover:scale-105"
                    style={{ animation: 'fadeIn 0.5s ease-in-out' }}
                >
                    <h3 className="text-lg font-bold mb-2">Wallet {index + 1}</h3>
                    <div className="mb-2">
                        <strong>Public Key:</strong>
                        <div className="overflow-x-auto">{wallet.publicKey.toBase58()}</div>
                    </div>
                    <div className="flex items-center">
                        <strong>Private Key:</strong>
                        <div
                            className="ml-2 overflow-x-auto break-all"
                            style={{ maxWidth: '100%', whiteSpace: 'nowrap' }}
                        >
                            {wallet.showSecret
                                ? Buffer.from(wallet.secretKey).toString('hex')
                                : "********************"}
                        </div>
                        <button
                            onClick={() => togglePrivateKeyVisibility(index)}
                            className="ml-2 text-purple-500"
                        >
                            {wallet.showSecret ? <IoIosEyeOff /> : <IoIosEye />}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
document.head.append(style);
