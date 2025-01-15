import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ balance, handleLogout }) => {

    return (
        <div className="text-center mt-3">
            <h2>Aplikasi Keuangan</h2>
            <h4>Total Saldo: Rp {balance?.toLocaleString()}</h4>

            <nav>
                <Link to="/" className="btn btn-primary me-2">
                    Home
                </Link>
                <Link to="/dashboard" className="btn btn-info me-2">
                    Dashboard
                </Link>
                <button className="btn btn-danger" onClick={handleLogout}>
                    Logout
                </button>
            </nav>
        </div>
    );
};

export default Header;