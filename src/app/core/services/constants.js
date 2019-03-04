'use strict';

export default function (app) {
    app
        .constant('ROUTE_ERRORS', {
            auth: 'Authorization has been denied.',
        });
    app.constant('constantValues', {
        'currency': [{ ccy: 'USD', buy: '26.80000', sale: '27.10000', $$hashKey: 'object:7' },
        { ccy: 'EUR', buy: '30.30000', sale: '30.80000', $$hashKey: 'object:11' }]
    });
}
