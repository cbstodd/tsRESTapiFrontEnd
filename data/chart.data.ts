export class ChartData {


    let;
    months = [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'october',
        'november',
        'december'
    ];

    const;
    barColors = ['red', 'green', 'blue', 'orange', 'brown'];
    let;
    xyValues = [{
        'january': {
            'refinance': 2000000,
            'purchase': 1800000
        }
    },
        {
            'february': {
                'refinance': 3500000,
                'purchase': 1920000
            },
        },
        {
            'march': {
                'refinance': 1400000,
                'purchase': 800000
            }
        },
        {
            'april': {
                'refinance': 4100000,
                'purchase': 2800000
            }
        },
        {
            'may': {
                'refinance': 2000000,
                'purchase': 1800000
            }
        },
        {
            'june': {
                'refinance': 2400000,
                'purchase': 1900000
            }
        }];

    new;

    Chart(

    'salesChart';
, {
    type: 'bar';
,
    data: {
        labels: months[],
        datasets: [{
            backgroundColor: barColors,
            data: xyValues
        }]
    };
,
    options: { ... };
}

)
;

ChartData[] = {
    chartData: [
        {
            'january': {
                'refinance': 2000000,
                'purchase': 1800000
            }
        },
        {
            'february': {
                'refinance': 3500000,
                'purchase': 1920000
            }
        },
        {
            'march': {
                'refinance': 1400000,
                'purchase': 800000
            }
        },
        {
            'april': {
                'refinance': 4100000,
                'purchase': 2800000
            }
        },
        {
            'may': {
                'refinance': 2000000,
                'purchase': 1800000
            }
        },
        {
            'june': {
                'refinance': 2400000,
                'purchase': 1900000
            }
        }
    ];
};
return chartData


}
