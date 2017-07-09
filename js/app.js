/**
 * Created by Winnie on 6/10/2017.
 */

var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : 'start.html'
        })
        .when("/go", {
            templateUrl : 'go.html',
            controller: 'myCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});