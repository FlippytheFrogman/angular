(function() {
  'use strict';

  angular.module('LunchCheck', [])

    .controller('LunchCheckController', function($scope) {
      $scope.name = "";
      $scope.mesg = "";

      $scope.getLunchMessage = function() {
        $scope.mesg = getMessageForString($scope.name);
      };

      function getMessageForString(string) {
        var res = string.split(",");
        if (string == "") return "Please enter data first";
        if (res.length == 0) return "Please enter data first";
        if (res.length <= 3) return "Enjoy!";
        else return "Too much!";
      }

    });


})();
