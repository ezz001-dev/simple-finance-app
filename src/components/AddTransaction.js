import React, { useState, useEffect } from 'react';

const AddTransaction = ({ onAddTransaction, transaction }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        if (transaction) {
            console.log("transaction goto edit ===> ", transaction)
            setDescription(transaction.description);
            setAmount(transaction.amount);
            setDate(transaction.date);
        } else {
            setDescription('');
            setAmount('');
            setDate('');
        }
    }, [transaction]);



    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description || !amount || !date) return alert('Isi semua kolom!');

        onAddTransaction({
            description,
            amount: parseFloat(amount),
            date,
        });
        setDescription('');
        setAmount('');
        setDate('');
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-3">
                <label>Deskripsi</label>
                <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Jumlah (negatif untuk pengeluaran)</label>
                <input
                    type="number"
                    className="form-control"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label>Tanggal</label>
                <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <button type="submit" className="btn btn-primary w-100">
                {transaction ? 'Perbarui Transaksi' : 'Tambah Transaksi'}
            </button>
        </form>
    );
};

export default AddTransaction;
