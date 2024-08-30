import { mnemonicToEntropy } from 'bip39'
import React from 'react'

function InputBox({ mnemonic }) {
    return (
        <div>
            <input type="text" value={mnemonic} />
        </div>
    )
}

export default InputBox