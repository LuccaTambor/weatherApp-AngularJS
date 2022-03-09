var weatherApp = angular.module("weatherApp", ['ngRoute', 'ngResource']);


//ROUTES
weatherApp.config(function ($routeProvider) {
    $routeProvider

    

    .when('/', {
        templateUrl: 'Views/home.html',
        controller: 'homeController'
    })

    .when('/forecast', {
        templateUrl: 'Views/forecast.html',
        controller: 'forecastController'
    })
});

//CONTROLLERS
weatherApp.controller("homeController", ['$scope', function($scope) {
}]);

weatherApp.controller("forecastController", ['$scope', function($scope) {

}]);