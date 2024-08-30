import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

export const EthWallet = ({ mnemonic }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [wallets, setWallets] = useState([]);

    async function generateWallet() {
        const seed = await mnemonicToSeed(mnemonic);
        const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
        const hdNode = HDNodeWallet.fromSeed(seed);
        const child = hdNode.derivePath(derivationPath);
        const wallet = new Wallet(child.privateKey);
        setCurrentIndex(currentIndex + 1);
        setWallets([...wallets, { address: wallet.address, privateKey: wallet.privateKey }]);
    }

    function togglePrivateKeyVisibility(index) {
        setWallets(wallets.map((wallet, i) =>
            i === index ? { ...wallet, showPrivateKey: !wallet.showPrivateKey } : wallet
        ));
    }

    return (
        <div className="p-5 max-w-xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-black">Ethereum Wallet</h1>
                <button
                    onClick={generateWallet}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
                >
                    Add ETH Wallet
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
                        <strong>Public Address:</strong>
                        <div className="overflow-x-auto">{wallet.address}</div>
                    </div>
                    <div className="flex items-center">
                        <strong>Private Key:</strong>
                        <div
                            className="ml-2 overflow-x-auto break-all"
                            style={{ maxWidth: '100%', whiteSpace: 'nowrap' }}
                        >
                            {wallet.showPrivateKey
                                ? wallet.privateKey
                                : "********************"}
                        </div>
                        <button
                            onClick={() => togglePrivateKeyVisibility(index)}
                            className="ml-2 text-purple-500"
                        >
                            {wallet.showPrivateKey ? <IoIosEyeOff /> : <IoIosEye />}
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
