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
        //common error function
    	var onError = function (error) {
            $scope.error = error.data;
        };
        //end error function

        //get all persone
    	var onPersonGetCompleted = function(response){
    		$scope.persons = response.data;
            console.log($scope.persons);
    	}
    	

        var refresh = function(){
        	$http.get('/persons')
        		.then(onPersonGetCompleted, onError);
        	console.log('Response received...');
        }

        refresh();
    	//end get all persons

        //get persons by Id
        var onGetByIdCompleted = function(response){
            $scope.person = response.data;
            console.log(response.data);
        };

        var search = function(id){
            $http.get('/person', id)
                    .then(onGetByIdCompleted, onError);
            console.log(id);
        };
        //end get person by Id

        //save person
        var onSavePersonCompleted = function(response){
            $scope.person = response.data;
            console.log(response.data);
            refresh();
        };
        var savePerson = function(person){
            $http.post('/addPerson', person)
                    .then(onSavePersonCompleted, onError);
            console.log(person);
        };
        //end save person

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