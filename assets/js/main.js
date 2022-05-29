document.querySelector(".select-child--dropdown-btn-inner").innerHTML = document.querySelector(".select-child--btn.active").innerHTML;

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['19/5', '18/4', '17/6', '20/7', '22/7', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8', '30/8'],
        datasets: [{
            label: 'Adam',
            data: [60, 45, 37, 57, 62, 53, 60, 45, 37, 57, 62, 53, 60, 45, 37, 57, 62, 53, 62, 53],
            backgroundColor: '#E5F0F7',
            borderColor: '#0575B6',
            borderWidth: 1,
            borderRadius: Number.MAX_VALUE,
            borderSkipped: false,
        },
        {
            label: 'Average',
            data: [65, 50, 63, 55, 62, 43, 65, 50, 63, 55, 62, 43, 65, 50, 63, 55, 62, 43, 62, 43],
            backgroundColor: '#E5E5E5',
            borderColor: '#333333',
            borderWidth: 1,
            borderRadius: Number.MAX_VALUE,
            borderSkipped: false,
        }]
    },
    options: {
        scales: {
            y: {
                ticks: {
                    min: 0,
                    max: this.max,
                    callback: function (value) {
                        return value + '%';
                    },
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Percentage',
                },
            },
        },

        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chemistry'
            }
        }
    }
});
