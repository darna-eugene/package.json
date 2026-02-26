"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [quantity, setQuantity] = useState(1);
  const [reference, setReference] = useState("");
  const [total, setTotal] = useState(0);

  const price = 35;

  useEffect(() => {
    const ref = "HOA-" + Math.floor(100000 + Math.random() * 900000);
    setReference(ref);
  }, []);

  useEffect(() => {
    setTotal(price * quantity);
  }, [quantity]);

  const whatsappMessage = `Hello House of Aromas, I completed payment. Reference: ${reference}. Total Paid: $${total}`;
  const whatsappLink = `https://wa.me/17672763118?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main style={{ textAlign: "center", padding: "40px" }}>
      <h1 style={{ color: "gold", fontSize: "60px" }}>
        House of Aromas
      </h1>

      <p style={{ color: "#ccc", fontSize: "20px" }}>
        Luxury Scents That Transform Spaces
      </p>

      <h2 style={{ marginTop: "40px", color: "gold" }}>
        8oz Luxury Candle - $35
      </h2>

      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        style={{ padding: "10px", fontSize: "18px", marginTop: "20px" }}
      />

      <h3 style={{ marginTop: "20px", color: "gold" }}>
        Total: ${total}
      </h3>

      <p style={{ marginTop: "20px" }}>
        Payment Reference: <strong style={{ color: "gold" }}>{reference}</strong>
      </p>

      <p>
        MoBanking Account: 200004033 <br />
        Mobile ID: 7672859575
      </p>

      <button
        onClick={() => window.open(whatsappLink, "_blank")}
        style={{
          marginTop: "30px",
          padding: "15px 30px",
          backgroundColor: "gold",
          color: "black",
          border: "none",
          fontSize: "18px",
          cursor: "pointer"
        }}
      >
        Send Proof of Payment
      </button>
    </main>
  );
}
