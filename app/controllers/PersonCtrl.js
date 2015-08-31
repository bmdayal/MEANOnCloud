'use strict';

/*var PersonCtrl = angular.module('addressBookApp', []);

PersonCtrl.controller('PersonCtrl',['$scope', '$routeParams', 
	function($scope, $routeParams){
		$scope.personName = "Brij Mohan";
	}]);
*/

(function () {
    var addressBookApp = angular.module("addressBookApp");

    var PersonCtrl = function ($scope, $http)
    {
    	$scope.working = 'Angular is Working';
    	var onError = function (error) {
            $scope.error = "Error retriving data";// error.data;
        };

    	var onPersonGetCompleted = function(data){
    		$scope.persons = data;
    	}
    	
    		$http.get('/persons')
    			.then(onPersonGetCompleted, onError);
    		console.log('Response received');
    	

        /*
        var onUserComplete = function (data) {
            $scope.user = data;
            github.getRepos($scope.user)
                 .then(onReposCompleted, onError);
        };

        var onReposCompleted = function (data) {
            $scope.repos = data;
        };*/
        
    }
    addressBookApp.controller('PersonCtrl', PersonCtrl);
}());