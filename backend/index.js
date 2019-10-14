const express = require('express');
const app = express();
const cors = require('cors');
const { BlockChain, Block } = require('./server/block-chain');
const PORT = 4000;

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let mohaCoin = new BlockChain();

app.get('/', (req, res) => res.send('You are on the root route :D'));

app.post('/blockchain', (req, res) => {
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
})

app.get('/blockchain', (req, res) => {
  res.send(mohaCoin.getBlockChain());
});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));