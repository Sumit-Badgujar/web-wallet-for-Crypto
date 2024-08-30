import { useState } from 'react'
import './App.css'
import CryptoCard from './components/CryptoCard';
import MyButton from './components/MyButton';
import Navbar from './components/Navbar';
import Body from './components/Body';
import { SolanaWallet } from './components/SolanaWallet';
import { EthWallet } from './components/EthWallet';
import { generateMnemonic } from "bip39";

function App() {
  const [mnemonic, setMnemonic] = useState("");
  const [showcard, setShowcard] = useState(false);


  async function generte() {
    const mn = await generateMnemonic();
    setMnemonic(mn)
  }

  return (
    <div className=' flex justify-center flex-col items-center'>
      < Navbar />
      < Body />
      < MyButton txt="Generate card" onClick={generte} />
      <div className=''>

      </div>
      <div className='w-full'>
        <div className='m-10 text-center flex justify-center hover:scale-105'>
          <CryptoCard mnemonic={mnemonic} showcard={showcard} setShowcard={setShowcard} />
        </div>
        <div className='flex w-full'>
          <div className='w-1/2 p-5 m-2' >
            <SolanaWallet mnemonic={mnemonic} />
          </div>

          <div className='w-1/2 p-5 m-2' >
            <EthWallet mnemonic={mnemonic} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
