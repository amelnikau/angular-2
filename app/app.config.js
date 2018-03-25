'use strict';

angular.module('blogApp').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/blogs', {
            template: '<blog-list></blog-list>'
        }).when('/blogs/:blogId', {
            template: '<blog-form></blog-form>'
        }).when('/blogs/create', {
            template: '<blog-from></blog-from>'
        }).otherwise('/blogs');
    }
]);
