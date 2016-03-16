var Site = angular.module('Site', []);

Site.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'components/wedding.html', 
      controller: 'RouteController'})
    .when('/wedding', {
      templateUrl: 'components/wedding.html', 
      controller: 'RouteController'})
    .when('/ashdan', {
      templateUrl: 'components/ashdan.html', 
      controller: 'RouteController'})
    .when('/families', {
      templateUrl: 'components/families.html', 
      controller: 'RouteController'})
    .when('/location', {
      templateUrl: 'components/location.html', 
      controller: 'RouteController'})
    .when('/sleep', {
      templateUrl: 'components/sleep.html', 
      controller: 'RouteController'})
    .when('/schedule', {
      templateUrl: 'components/schedule.html', 
      controller: 'RouteController'})
    .when('/packing', {
      templateUrl: 'components/packing.html', 
      controller: 'RouteController'})
    .when('/rsvp', {
      templateUrl: 'components/rsvp.html', 
      controller: 'RouteController'})
    .when('/gifts', {
      templateUrl: 'components/gifts.html', 
      controller: 'RouteController'})
    .otherwise({redirectTo: '/'});
});

function AppController ($scope, $rootScope, $http) {
  // Load pages on startup
  $http.get('pages.json').success(function (data) {
    $rootScope.pages = data;
  });

  // Set the slug for menu active class
  $scope.$on('routeLoaded', function (event, args) {
    $scope.slug = args.slug;
  });
}

function RouteController ($scope, $rootScope, $routeParams) {
  // Getting the slug from $routeParams
  var slug = $routeParams.slug;
  
  $scope.$emit('routeLoaded', {slug: slug});
  $scope.page = $rootScope.pages[slug];
}


