import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import api from "../utils/api";

export default function MohaCoinList() {
  const [chain, setChain] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await api.blockChain().getAll();
      setChain(data);
    })();
  }, []);

  return (
    <ListGroup>
      <p className="lead text-center my-4">MohaCoin List!</p>
      {chain &&
        chain.map(block => <ListGroup.Item>{block.timeStamp}</ListGroup.Item>)}
    </ListGroup>
  );
}
