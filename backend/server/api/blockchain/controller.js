const { BlockChain, Block } = require('./model');

let mohaCoin = new BlockChain();

exports.post =  function(req, res) {
  const { body: blockData } = req;

  const {timeStamp, data } = blockData;

  mohaCoin.addBlock( new Block(timeStamp, data));
  
  // mutate data
  // mohaCoin.blockChain[1].data = { amount: 33 };

  console.log(mohaCoin.isChainValid());

  if(mohaCoin.isChainValid()) {
    res.send(mohaCoin.getBlockChain());
  } else {
    res.send('Block creation failed')
  }
}

exports.get = function (req, res) {
  res.send(mohaCoin.getBlockChain());
};