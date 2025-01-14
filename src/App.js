

import React, { useState } from 'react';
import Header from './components/Header';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const calculateBalance = () => {
    return transactions.reduce((total, transaction) => {
      // console.log('Transaction ==> ', transaction)
      // console.log('total ==> ', total)
      // console.log('amount ==> ', transaction.amount)
      return total + transaction.amount
    }, 0);
  };

  const addTransaction = (transaction) => {
    console.log(transaction)
    setTransactions([transaction, ...transactions]);
  };

  const removeTransaction = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
  };

  return (
    <div className="container mt-5">
      <Header balance={calculateBalance()} />
      <AddTransaction onAddTransaction={addTransaction} />
      <TransactionList
        transactions={transactions}
        onRemoveTransaction={removeTransaction}
      />
    </div>
  );
};

export default App;
