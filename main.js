require.config({
    baseUrl: '.',
    urlArgs: 'v=1.0',
      paths: {
        'angular': 'lib/angular/angular',
         'ngRoute': 'lib/angular-route/angular-route.min'
      },
      shim: {
        angular: {
          exports: 'angular'
        },
        ngRoute: {
          deps: ['angular']
        }
      }
});

require(
    [
        'angular',
        'app'
    ],
    function (angular) {
        angular.bootstrap(document, ['customersApp']);
    });