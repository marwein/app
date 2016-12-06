var app = angular.module('marwein-app',['ngRoute', 'ngAnimate']);

app.config(['$location', '$locationProvider', function ($location, $locationProvider){
    $location.prefix('!');
}])