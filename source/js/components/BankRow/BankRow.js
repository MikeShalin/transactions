import React  from 'react';

export const BankRow=({amount,onDelete,bankName,i})=>{
    return(
        <tr>
            <td><strong>{i}</strong></td>
            <td>{amount}</td>
            <td><i>{bankName.name}</i></td>
            <td><button onClick={onDelete}>Удалить</button></td>
        </tr>)
};
