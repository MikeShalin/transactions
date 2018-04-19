import React from "react";

export const BankRow = ({ amount, onDelete, bankName, i }) => (
  <tr>
    <td>
      <strong>{i}</strong>
    </td>
    <td>{amount}</td>
    <td>
      <i>{bankName}</i>
    </td>
    <td>
      <button onClick={onDelete}>Удалить</button>
    </td>
  </tr>
);
