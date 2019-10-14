import React, { useState, useEffect } from "react";
import MohaCoinList from "../MohaCoinList";
import AddCoin from "../AddCoin";
import api from "../../utils/api";

export default function Home() {
  const [chain, setChain] = useState([]);

  useEffect(() => {
    fetchBlockChain();
  }, []);

  const fetchBlockChain = async () => {
    const { data } = await api.blockChain().getAll();
    setChain(data);
  };

  return (
    <div className="mt-5">
      <h1 className="text-center display-3">Welcome!</h1>
      <div className="container">
        <AddCoin fetchBlockChain={fetchBlockChain} />
        <MohaCoinList chain={chain} />
      </div>
    </div>
  );
}
