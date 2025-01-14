import React from 'react';

const Header = ({ balance, handleLogout }) => {

    return (
        <div className="text-center mt-3">
            <h2>Aplikasi Keuangan</h2>
            <h4>Total Saldo: Rp {balance.toLocaleString()}</h4>

            <button className="btn btn-danger" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Header;