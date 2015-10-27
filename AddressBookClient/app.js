'use strict';
//Angular new controller: http://blog.thoughtram.io/angularjs/2015/02/19/futuristic-routing-in-angular.html
(function () {
    var app = angular.module("addressBookApp", ['ngRoute', 'angular-loading-bar']);
    app.config(function ($routeProvider) {
        $routeProvider
        .when("/person", {
            templateUrl: 'app/views/person.html',
            controller: "PersonCtrl"
        })
        .when("/person/:personId", {
            templateUrl: 'app/views/persondetail.html',
            controller: "PersonAddressCtrl"
        })
        .otherwise({ redirectTo: "/person" })
    });
}());
