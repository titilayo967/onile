import React from 'react';

export default function TradingPage() {
  return (
    <section className="space-y-4">
      <span className="chip">Market Desk</span>
      <h1 className="text-h1 text-text-primary">Trading</h1>
      <p className="text-body">Place buy and sell intents for eligible property tokens with transparent previews and execution context.</p>
      <div className="surface-card p-5 md:p-6 space-y-3">
        <p className="text-h3 text-text-primary">Order Ticket Preview</p>
        <p className="text-body-sm">Selected Pair: NGN-LAGOS-REIT / USDC</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button className="button-primary" type="button">Buy Tokens</button>
          <button className="button-secondary" type="button">Sell Tokens</button>
        </div>
      </div>
    </section>
  );
}
