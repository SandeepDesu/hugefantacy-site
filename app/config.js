app.config(function($stateProvider, $urlRouterProvider, $httpProvider,$resourceProvider) {
    $urlRouterProvider.otherwise('/home');
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $resourceProvider.defaults.stripTrailingSlashes = false;
    $resourceProvider.defaults.useXDomain = true;
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'views/home.html'
    }).state('sign-in', {
        url: '/sign-in',
        templateUrl: 'views/sign-in.html'
    }).state('sign-up', {
        url: '/sign-up',
        templateUrl: 'views/sign-up.html'
    })
});
