import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Simulasi login sederhana
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
            alert('Login berhasil!');
            localStorage.setItem('isLoggedIn', true);
            navigate('/'); // Redirect ke halaman utama
        } else {
            alert('Email atau password salah!');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit" className="btn btn-primary w-100">Login</button>
                <p className="mt-3">
                    {/* Belum punya akun? <a href="/register">Daftar di sini</a> */}
                    Belum punya akun? <Link to="/register"> Daftar di sini </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
