import React from 'react'

const Transaction = ({transaction }) => {
    return (
        <div>
            <li>{transaction.amount}</li>
            <li>{transaction.text}</li>
            <span>{transaction.amount}</span>
            <button className='delete-btn'>X</button>
        </div>
      )
}

export default Transaction