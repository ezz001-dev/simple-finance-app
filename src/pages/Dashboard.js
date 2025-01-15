import React, { useState } from 'react';
import DashboardChart from '../components/DashboardChart';

const Dashboard = ({ transactions }) => {


    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    // Filter transaksi berdasarkan tanggal
    const filteredTransactions = transactions.filter((transaction) => {
        const transactionDate = new Date(transaction.date);
        const start = startDate ? new Date(startDate) : null;
        const end = endDate ? new Date(endDate) : null;

        if (start && transactionDate < start) return false;
        if (end && transactionDate > end) return false;
        return true;
    });

    // Hitung total income dan expense
    const totalIncome = filteredTransactions
        .filter((t) => t.amount > 0)
        .reduce((total, t) => total + parseFloat(t.amount), 0);
    const totalExpense = filteredTransactions
        .filter((t) => t.amount < 0)
        .reduce((total, t) => total + parseFloat(t.amount), 0) * -1; // change to positive



    return (
        <div className="container mt-5">
            <h2>Dashboard</h2>

            {/* Filter Tanggal */}
            <div className="date-filter">
                <div>
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="endDate">End Date:</label>
                    <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-md-6">
                    <div className="card text-white bg-success mb-3">
                        <div className="card-header">Total Income</div>
                        <div className="card-body">
                            <h5 className="card-title">Rp {totalIncome?.toLocaleString()}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card text-white bg-danger mb-3">
                        <div className="card-header">Total Expense</div>
                        <div className="card-body">
                            <h5 className="card-title">Rp {totalExpense?.toLocaleString()}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardChart transactions={filteredTransactions} />
        </div>
    );
};

export default Dashboard;
