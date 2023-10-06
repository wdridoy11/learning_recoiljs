import React from 'react'
import NewTransaction from '../../Components/NewTransaction'
import TransactionList from '../../Components/TransactionList'

const Home = () => {
  return (
    <div>
      <NewTransaction></NewTransaction>
      <TransactionList></TransactionList>
    </div>
  )
}

export default Home