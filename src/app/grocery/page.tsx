"use client";

import { useState } from "react";

export default function tripPlanner() {
  const [showCart, cartVisibility] = useState(false);

  return (
    <div>
      <div className="grocery">
        <div className="grocery-categories">Item list will go here</div>
        <div className="grocery-items">Items will go here</div>
        {showCart && (
          <div className="grocery-cart">Cart will be here when shown</div>
        )}
      </div>
    </div>
  );
}
