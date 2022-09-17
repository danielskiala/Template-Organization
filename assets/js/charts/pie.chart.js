const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow',
        'green',
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100, 60],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(25, 205, 86)'

        ],
        hoverOffset: 4,
        display: false,
    }]
};

const config = {
    type: 'pie',
    data: data,
    options: {
        responsive: false,
        plugins: {
            legend: {
                position: 'bottom',
                display: false,
            }
        }
    },
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);