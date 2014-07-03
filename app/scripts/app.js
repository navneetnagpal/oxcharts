'use strict';

angular.module('oxChartSamples', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router',
    'oxChartSamples.controllers',
    'oxChartSamples.directives',
    'oxChartSamples.services',
    'oxChartSamples.filters',
    'pascalprecht.translate'
])
    .config(['$stateProvider', '$urlRouterProvider', '$translateProvider',
        function($stateProvider, $urlRouterProvider, $translateProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'views/home.html',
                    controller: "MainCtrl"
                });
        }
    ]);