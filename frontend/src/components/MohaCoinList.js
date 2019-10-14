import React from "react";
import { ListGroup } from "react-bootstrap";

export default function MohaCoinList({ chain }) {
  return (
    <ListGroup>
      <p className="lead text-center my-4">MohaCoin List!</p>
      {chain &&
        chain.map(block => (
          <ListGroup.Item className="my-2" key={block.timeStamp}>
            ${block.data.amount}
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
}
