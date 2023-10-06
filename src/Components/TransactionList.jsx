import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import transactionListState from '../recoil/atoms/atoms'
import Transaction from './Transaction';

const TransactionList = () => {
    const [transactionList, setTransactionList] = useRecoilState(transactionListState);
    useEffect(() => {
        setTransactionList(JSON.parse(localStorage.getItem("TRANSACTION_LIST")))
      }, [setTransactionList])

// console.log(transactionList[0])

  return (
    <div>
        <h3 className='text-2xl'>Transactio History</h3>
        <ul className='list'>
            {transactionList !== null &&
                transactionList?.map((transaction, index)=><Transaction
                key={index}
                transaction={transaction}
            >
            </Transaction>)}
        </ul>
    </div>
  )
}

export default TransactionList