

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';

import Login from './auth/Login';
import Register from './auth/Register';

import Dashboard from './pages/Dashboard';

const App = () => {

  // const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  // console.log("isLoggedIn ", isLoggedIn)

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);




  const [transactions, setTransactions] = useState([]);
  const [transactionToEdit, setTransactionToEdit] = useState(null); // Menyimpan transaksi yang sedang diedit

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
    if (transactionToEdit !== null) {
      console.log("transactionToEdit ==> ", transactionToEdit)
      // Jika ada transaksi yang sedang diedit, update transaksi
      const updatedTransactions = [...transactions];
      updatedTransactions[transactionToEdit] = transaction;
      setTransactions(updatedTransactions);
      setTransactionToEdit(null);
    } else {
      // Jika tidak ada transaksi yang sedang diedit, tambahkan transaksi baru
      setTransactions([transaction, ...transactions]);
    }
  };

  const removeTransaction = (index) => {
    const updatedTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(updatedTransactions);
  };

  const editTransaction = (index) => {
    setTransactionToEdit(index); // Set transaksi yang akan diedit
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (

    <Router>
      <Routes>

        {/* Halaman login dan register */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />

        <Route path='/' element={
          isLoggedIn ? (
            <div className="container mt-5">
              <Header balance={calculateBalance()} handleLogout={handleLogout} />
              <AddTransaction
                onAddTransaction={addTransaction}
                transaction={transactionToEdit !== null ? transactions[transactionToEdit] : null}
              />
              <TransactionList
                transactions={transactions}
                onRemoveTransaction={removeTransaction}
                onEditTransaction={editTransaction}
              />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        } />

        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <div>
                <Header balance={calculateBalance()} handleLogout={handleLogout} />
                <Dashboard transactions={transactions} />
              </div>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

      </Routes>
    </Router>


  );
};

export default App;
