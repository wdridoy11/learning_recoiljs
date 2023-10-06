import React from 'react'
import { useRecoilValue } from 'recoil'
import balanceState from '../recoil/selectors/Selector'

const Balance = () => {
    const balance = useRecoilValue(balanceState);

  return (
    <div>
        <h4>Your Balance</h4>
        <h1>{balance}</h1>
    </div>
  )
}

export default Balance