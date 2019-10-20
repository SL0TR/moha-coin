const { BlockChain, Block } = require('./model');

let mohaCoin = new BlockChain();

exports.post =  function(req, res) {
  const { body: blockData } = req;

  const {timeStamp, data } = blockData;
  
  let prevBlock = [...mohaCoin.blockChain];

  mohaCoin.addBlock( new Block(timeStamp, data));

  // mutate data
  // mohaCoin.blockChain[1].data = { amount: 33 };


  if(mohaCoin.isChainValid()) {
    res.send(mohaCoin.getBlockChain());
  } else {
    // console.log({ currBlock: mohaCoin.blockChain, prevBlock })
    mohaCoin.blockChain = prevBlock;
    res.status(403).send('Block registration auth failed!')
  }
}

exports.get = function (req, res) {
  res.send(mohaCoin.getBlockChain());
};