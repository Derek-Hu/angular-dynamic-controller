'use strict';

define(['angular', 'ngRoute', 'services/routeResolver'], function () {

    var app = angular.module('customersApp', ['ngRoute', 'routeResolverServices']);

    app.config(['$routeProvider', 'routeResolverProvider', '$controllerProvider', 
                '$compileProvider', '$filterProvider', '$provide',
        function ($routeProvider, routeResolverProvider, $controllerProvider, 
                  $compileProvider, $filterProvider, $provide) {

            //Change default views and controllers directory using the following:
            //routeResolverProvider.routeConfig.setBaseDirectories('/app/views', '/app/controllers');

            app.register =
            {
                controller: $controllerProvider.register,
                directive: $compileProvider.directive,
                filter: $filterProvider.register,
                factory: $provide.factory,
                service: $provide.service
            };

            //Define routes - controllers will be loaded dynamically
            var route = routeResolverProvider.route;

            $routeProvider
                .when('/customers', route.resolve('Customers'))
                .otherwise({ redirectTo: '/customers' });

            }]);


        //app.run(['$q', 'use$q', '$rootScope', '$location', 'authService',
            //function ($q, use$q, $rootScope, $location, authService) {
        app.run(['$q', '$rootScope', '$location', 
            function ($q,  $rootScope, $location) {

                //Client-side security. Server-side framework MUST add it's 
                //own security as well since client-based security is easily hacked
                $rootScope.$on("$routeChangeStart", function (event, next, current) {
                    if (next && next.$$route && next.$$route.secure) {
                        /*if (!authService.user.isAuthenticated) {
                            authService.redirectToLogin();
                        }*/
                    }
                });

        }]);

            return app;
});