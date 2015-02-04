(function(angular) {
  'use strict';
angular.module('cheersCaitlin', ['ui.bootstrap'])
  .controller('GreetController', ['$scope', function($scope) {
    $scope.name = 'World';
  }])
  .controller('ListController', ['$scope', function($scope) {
        $scope.persons = [
        { id: 1, name: "charlie" },
        { id: 2, name: "caitlin" }
    ];
  }])
  .controller('AccordionDemoCtrl', ['$scope', function ($scope) {
  $scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  
  }]);
  
})(window.angular);