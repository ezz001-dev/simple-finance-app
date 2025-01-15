import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DashboardChart = ({ transactions }) => {
    // Filter data pemasukan dan pengeluaran
    const income = transactions
        .filter((t) => t.amount > 0)
        .reduce((total, t) => total + parseFloat(t.amount), 0);
    const expense = transactions
        .filter((t) => t.amount < 0)
        .reduce((total, t) => total + parseFloat(t.amount), 0) * -1;

    // Data untuk chart
    const data = {
        labels: ['Income', 'Expense'],
        datasets: [
            {
                label: 'Amount',
                data: [income, expense],
                backgroundColor: ['#4caf50', '#f44336'], // Warna untuk income dan expense
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Financial Overview',
            },
        },
    };

    return (
        <div className="chart-container">
            <Bar data={data} options={options} />
        </div>
    );
};

export default DashboardChart;
