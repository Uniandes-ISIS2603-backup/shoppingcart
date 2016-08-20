var app = angular.module('MainApp', []);

app.controller('shopController', function($scope) {
  $scope.invoice = {
      items: [{
        qty: 10,
        description: 'item',
        cost: 9.95
      }]
    },
    $scope.addItem = function() {
      $scope.invoice.items.push({
        qty: 1,
        description: '',
        cost: 0
      });
    },
    $scope.deleteItem = function(index) {
      $scope.invoice.items.splice(index, 1);
    },
    $scope.subTotal = function(item) {
      return item.qty * item.cost;
    },
    $scope.total = function() {
      var total = 0;
      angular.forEach($scope.invoice.items, function(item) {
        total += item.qty * item.cost;
      });

      return total;
    }
});