var app = angular.module('MainApp', []);

app.controller('shopController', function ($scope) {
    $scope.invoice = {
        items: [{
                qty: 10,
                description: 'item',
                cost: 9.95
            }]
    }
});
