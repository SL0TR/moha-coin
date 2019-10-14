import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import api from "../utils/api";

export default function AddCoin({ fetchBlockChain }) {
  const [amount, setAmount] = useState("");

  const registerCoin = async e => {
    e.preventDefault();
    const now = new Date();
    const date = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    const blockData = {
      timeStamp: date,
      data: {
        amount
      }
    };

    const { data } = await api.blockChain().create(blockData);

    if (data) {
      fetchBlockChain();
      setAmount("");
    }
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
