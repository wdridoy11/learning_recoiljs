import React from 'react'
import { useRecoilValue } from 'recoil'
import { expenseStatsState } from '../recoil/selectors/ExpenseStatus'

const ExpenseStatus = () => {
    const {income, expense} = useRecoilValue(expenseStatsState)
  return (
    <div className="expense-status-container">
        <div>
            <h4>Income <p>{income}</p></h4>
        </div>
        <div>
            <h4>Expense <p>{expense}</p></h4>
        </div>
    </div>
  )
}

export default ExpenseStatus