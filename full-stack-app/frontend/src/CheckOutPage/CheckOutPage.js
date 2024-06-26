import React from "react";
import { useNavigate } from "react-router-dom";

export default function CheckOutPage() {
  const navigate = useNavigate();
  const { vegetable } = navigate.location.state;

  return (
    <div>
      {vegetable && (
        <ul>
          <li>
            {vegetable.VegitableName} - ${vegetable.Price}
          </li>
        </ul>
      )}
    </div>
  );
}
