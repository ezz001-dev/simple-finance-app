import React from 'react';

const TransactionList = ({ transactions, onRemoveTransaction }) => {
    return (
        <div className="mt-4">
            <h5>Daftar Transaksi</h5>
            <ul className="list-group">
                {transactions.map((transaction, index) => (
                    <li
                        key={index}
                        className={`list-group-item d-flex justify-content-between align-items-center ${transaction.amount < 0 ? 'list-group-item-danger' : 'list-group-item-success'
                            }`}
                    >
                        {/* <span>
                            {transaction.description}
                        </span> */}

                        <div>
                            <strong>{transaction.description}</strong>
                            <br />
                            <small className="text-muted">{new Date(transaction.date).toLocaleDateString()}</small>
                        </div>
                        <div>
                            Rp {transaction.amount.toLocaleString()}
                            <button
                                className="btn btn-danger btn-sm ms-3"
                                onClick={() => onRemoveTransaction(index)}
                            >
                                Hapus
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TransactionList;
