'use strict';

angular.module('myApp.templates',['ngRoute'])
.config(['$routeProvider',function($routeProvider){
    $routeProvider
        .when('/templates', {
            templateUrl:'templates/templates.html',
            controller:'TemplateController'
    })
        .when('/templates/:templateId', {
            templateUrl:'templates/templatesDetails.html',
            controller:'TemplateDetailsController'
    })
    
    
}])
.controller('TemplateController',['$scope',function($scope){
    console.log('Hola Amigo!');
}])
.controller('TemplateDetailsController',['$scope',function($scope){
    console.log('Rang Birangi Duniya');
}])