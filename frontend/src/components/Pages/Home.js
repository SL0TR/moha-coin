import React from "react";
import MohaCoinList from "../MohaCointList";
import AddCoin from "../AddCoin";

export default function Home() {
  return (
    <div className="mt-5">
      <h1 className="text-center display-3">Welcome!</h1>
      <div className="container">
        <AddCoin />
        <MohaCoinList />
      </div>
    </div>
  );
}
