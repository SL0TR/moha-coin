const express = require('express');
const app = express();
const { BlockChain, Block } = require('./server/block-chain');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = 3000;

let mohaCoin = new BlockChain();

app.get('/', (req, res) => res.send('You are on the root route :D'));

app.post('/add-block', (req, res) => {
  const { body: blockData } = req;

  mohaCoin.addBlock( new Block(blockData));
  
  // mutate data
  // mohaCoin.blockChain[1].data = { amount: 33 };

  console.log(mohaCoin.isChainValid());

  if(mohaCoin.isChainValid()) {
    res.send(mohaCoin.getBlockChain());
  } else {
    res.send('Block creation failed')
  }
})

app.get('/blockchain', (req, res) => {
  res.send(mohaCoin.getBlockChain());

});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));