import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        // Simpan pengguna baru ke localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some((user) => user.email === email);

        if (userExists) {
            alert('Email sudah terdaftar!');
            return;
        }

        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registrasi berhasil!');
        navigate('/login'); // Redirect ke halaman login
    };

    return (
        <div className="container mt-5">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Register</button>
                <p className="mt-3">
                    {/* Sudah punya akun? <a href="/login">Login di sini</a> */}
                    Sudah punya akun? <Link to="/login">Login di sini</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
