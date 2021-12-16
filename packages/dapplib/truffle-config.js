require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food jaguar crawl pave coconut gentle light army genius'; 
let testAccounts = [
"0xef219abbfccbc76bfb96132f70e92c4cf28cc7e9c24eadb64abae4744ad7f685",
"0x90fd032293c3cf664cc6a1261f973a975b96963bdbfc75251dd664f60eed375c",
"0x224a035b0c79dabfa777a844df36ac7d5e33033aa385d01f414abd2def154b3b",
"0xada47f723931afdb7e87a640e0be6a783f0db5a237bb476bc1b3afbead23891e",
"0x2381f3cfae12628017195d838a29580cf21b82821db40e7665e4a794d7a0e548",
"0x6aff1638a9c44e778a2f35fca2cd3eaca97eaca7047e3953fd4dd4a9b7057b93",
"0xe895e7abe679284f3c492ed2bc96a839040a6cee03e6c34146c071006850fbff",
"0xd9e7026ce4007c458a8cd1f183d4fc6391c693da7f802cb3f8bed18e0ad52236",
"0x394c4c25de172c1a1d0e43612246e0bcf065d77fc0f8ee0279a1ec724b9895e0",
"0xc95130583a68f50e1c421a7a21b3f799f3f4fc467370924b5ab4c48b5bfd9eb3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

