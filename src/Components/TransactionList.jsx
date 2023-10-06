import React from 'react'
import { useRecoilValue } from 'recoil'
import transactionListState from '../recoil/atoms/atoms'
import Transaction from './Transaction';

const TransactionList = () => {
    const transactionListItems = useRecoilValue(transactionListState);
  return (
    <div>
        <h3>Transactio History</h3>
        <ul className='list'>
            {transactionListItems.map((transaction)=><Transaction 
                key={transaction._id}
                transaction={transaction}
            >
            </Transaction>)}
        </ul>
    </div>
  )
}

export default TransactionList