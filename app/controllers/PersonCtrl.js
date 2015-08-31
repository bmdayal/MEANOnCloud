'use strict';

/*var PersonCtrl = angular.module('addressBookApp', []);

PersonCtrl.controller('PersonCtrl',['$scope', '$routeParams', 
	function($scope, $routeParams){
		$scope.personName = "Brij Mohan";
	}]);
*/

(function () {
    var addressBookApp = angular.module("addressBookApp");

    var PersonCtrl = function ($scope)
    {
        $scope.personName = "Brij Mohan";
        /*
        var onUserComplete = function (data) {
            $scope.user = data;
            github.getRepos($scope.user)
                 .then(onReposCompleted, onError);
        };

        var onReposCompleted = function (data) {
            $scope.repos = data;
        };

        var onError = function (error) {
            $scope.error = "Error retriving data";// error.data;
        };
        github.getUser($routeParams.username).then(onUserComplete, onError)
        */
    }
    addressBookApp.controller('PersonCtrl', PersonCtrl);
}());