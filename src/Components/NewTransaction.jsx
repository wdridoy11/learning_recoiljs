import React, { useEffect, useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil';
import transactionListState from '../recoil/atoms/atoms';
import { v4 as uuidv4 } from "uuid"

const NewTransaction = () => {
    const [textValue, setTextValue] = useState("");
    const [amount, setAmount] = useState(0);
    const settransactionList = useSetRecoilState(transactionListState);
    const transactionList = useRecoilState(transactionListState);

    const NewTransaction = e =>{
        e.preventDefault();
        settransactionList(oldTransactionList =>[
            ...oldTransactionList,
            {
                id:uuidv4(),
                amount: +amount,
                text: textValue,
            },
        ])
        setTextValue("")
        setAmount(0)
    }

    const handleTextValue= e =>{
        setTextValue(e.target.value)
    }

    const handleAmount= e =>{
        setAmount(e.target.value)
    }

    useEffect(() => {
        localStorage.setItem("TRANSACTION_LIST", JSON.stringify(transactionList))
      }, [transactionList])


  return (
    <div>
        <h3>Add new Transaction</h3>
        <form action="">
            <div>
                <label htmlFor="text">Description</label>
                <input className='input input-bordered' type="text" value={textValue} onChange={handleTextValue} />
            </div>
            <div>
                 <label htmlFor="amount">Amount</label>
                <input className='input input-bordered' type="amount" value={amount} onChange={handleAmount} />
            </div>
            <button onClick={NewTransaction}>Add transaction</button>
        </form>
    </div>
  )
}

export default NewTransaction