require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name razor situate snake hidden knife army gate'; 
let testAccounts = [
"0xbcef9eccab187af61d300d814bd3a86087573e5c1f9e699f8087afdd7a017758",
"0x4e7ea7cb070d16374066752a1598aac404df10ae5e6269b13e5d1cc76af96ddf",
"0xd1c7b6d0414bc068fdd364000470aaa89dc6fcedc40ad78a71e7a8459f60bd6e",
"0x92313a7b0bece7cc0c1321fd283575691f244771d66103d95685e65894036d6a",
"0xc721c4d5e69b01b37c9da3d5c8305102691c37fdf2a220cc5c6841a51d2cd65b",
"0x7f2c83f8129256cd5abeed46374883585971c4eac1d61effbc0eba8caa6ba8f2",
"0x5c55e2521013fc4ca19f675a15f08e45d4b58f06fd072210abb5085e681270ac",
"0x98c9d22f199db2c76dae61e57667192efb29642e1c337b29f5e5a2798381a1e3",
"0x9d7600e286c725ed8358e129deb6b26e6bd13f866a078ef95f94158173c4fc83",
"0xf940625f4f329fe2ac5344e7d2a9df9e0fcb7f3ce349dfae4a5f853a017b5b11"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

