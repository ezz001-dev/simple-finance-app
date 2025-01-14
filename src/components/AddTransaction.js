import React, { useState } from 'react';

const AddTransaction = ({ onAddTransaction }) => {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!description || !amount) return alert('Isi semua kolom!');
        onAddTransaction({ description, amount: parseFloat(amount) });
        setDescription('');
        setAmount('');
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
            <button type="submit" className="btn btn-primary w-100">Tambah Transaksi</button>
        </form>
    );
};

export default AddTransaction;
