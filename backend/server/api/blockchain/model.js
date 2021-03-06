const SHA256 = require('crypto-js/sha224');

class Block {

  constructor(timeStamp, data, prevHash = '') {
      this.timeStamp = timeStamp;
      this.data = data;
      this.prevHash = prevHash;
      this.hash = this.calculateHash();
  }

  calculateHash() {
    return SHA256(this.prevHash + this.timeStamp + JSON.stringify(this.data)).toString();
  }

}


class BlockChain {

  constructor() {
    this.blockChain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block('01/01/0001', { amount: 100 }, 'empty');
  }

  getBlockChain() {
    return this.blockChain;
  }

  getLatestBlock() {
    return this.blockChain[this.blockChain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.prevHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.blockChain.push(newBlock);
  }

  isChainValid() {
    for(let i = 1;  i < this.blockChain.length; i++) {
      const currentBlock = this.blockChain[i];
      const prevBlock = this.blockChain[i - 1];

      if(currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if(currentBlock.prevHash !== prevBlock.hash) {
        return false;
      }

      return true;
    }
  }

}

module.exports = {
  BlockChain,
  Block
} 