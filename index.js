const express = require('express');
const app = express();
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const PORT = 3000;
const { BlockChain, Block } = require('./server/block-chain');

let mohaCoin = new BlockChain();

app.get('/', (req, res) => res.send('You are on the root route :D'));

app.post('/add-block', (req, res) => {
  const { body: blockData } = req;

  mohaCoin.addBlock( new Block(blockData))

  if(mohaCoin.getBlockChain().length > 1) {
    res.send(mohaCoin.getBlockChain());
  } else {
    res.send('Block creation failed')
  }
})

app.get('/blockchain', (req, res) => {
  res.send(mohaCoin.getBlockChain());

});

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));