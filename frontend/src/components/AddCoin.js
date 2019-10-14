import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import api from "../utils/api";

export default function AddCoin() {
  const [coinData, setCoinData] = useState({});
  const [amount, setAmount] = useState({});

  const registerCoin = async e => {
    e.preventDefault();
    const now = new Date();
    const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    const data = {
      index: 2,
      timeStamp: date,
      amount
    };

    setCoinData(data);

    const { data: res } = await api.blockChain().create(coinData);
    console.log(res);
  };

  return (
    <Form>
      <Form.Group controlId="data">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          value={amount}
          onChange={e => {
            setAmount(e.target.value);
          }}
          type="number"
          placeholder="Enter Amount"
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={registerCoin}>
        Add Coin
      </Button>
    </Form>
  );
}
