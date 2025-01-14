import React from 'react';

const Header = ({ balance }) => {
    return (
        <div className="text-center mt-3">
            <h2>Aplikasi Keuangan</h2>
            <h4>Total Saldo: Rp {balance.toLocaleString()}</h4>
        </div>
    );
};

export default Header;