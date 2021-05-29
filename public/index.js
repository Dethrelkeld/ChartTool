

let ctx = document.getElementById('envelopeChart');





const labels = [
    'CH-750SD',
    'S21',
    'RV-8',
    'C-172'
];

const data = {
    labels: labels,
    datasets: [{
        label: 'VS0',
        backgroundColor: 'red',
        data: [ 34, 40, 58, 54], 
    }, {
        label: 'VC',
        backgroundColor: 'blue',
        data: [105, 155, 208, 131]
    }, {
        label: 'VNE',
        backgroundColor: 'orange',
        data: [140, 215, 220, 182]
    }
]
};

let config = {
    type: 'bar',
    data, 
    options: {
        scales: {
            xAxes: { stacked: true },
            yAxes: { stacked: false }
        },
        
    }
};



let envelopeChart = new Chart(ctx, config);

let tlChart = new Chart(document.getElementById('tlChart'), {
    type: 'bar',
    data: {
       labels: labels,
       datasets: [{
            label: 'Take Off',
            backgroundColor: 'rgba(60, 204, 161, 0.616)',
            data: [115, 325, 575, 805]

       },
    ]
    }
});