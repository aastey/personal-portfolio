/**
 * AngularJS Tutorial 1
 * @author Nick Kaye <nick.c.kaye@gmail.com>
 */

/**
 * Main AngularJS Web Application
 */
var app = angular.module('amandaPortfolio', [
  'ngRoute'
]);
/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/develop", {templateUrl: "partials/develop.html", controller: "PageCtrl"})
    .when("/design", {templateUrl: "partials/design.html", controller: "PageCtrl"})
    .when("/resume", {templateUrl: "partials/resume.html", controller: "PageCtrl"})
    .when("/develop/:page", {templateUrl: "partials/portfolio.html", controller: "DevelopSubPage"})
    .when("/design/:page", {templateUrl: "partials/portfolio.html", controller: "DesignSubPage"})
    .otherwise({redirectTo: '/'});
}]);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
});

/**
 * Controls Design Page Template
 */
app.controller("DesignCtrl", function($scope, $http) {
  $http.get('../data/design-projects.json').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});

/**
 * Controls Develop Page Template
 */
app.controller("DevelopCtrl", function($scope, $http) {
  $http.get('../data/develop-projects.json').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
      // log error
    });
});

/**
 * Controls All Design Sub Pages
 */
app.controller('DesignSubPage', function($scope,$routeParams, $http) {
    $http.get('../data/design-projects.json').
    success(function(data, status, headers, config) {
      var pagename = $routeParams.page;
      $scope.posts = data[pagename];
      
      //all of the pieces needed for the template
       $scope.title= $scope.posts.name
       $scope.description = $scope.posts.longDescription;
       $scope.imageOne = $scope.posts.imageOne;
       $scope.imageTwo = $scope.posts.imageTwo;
       $scope.imageThree = $scope.posts.imageThree;
       $scope.url = $scope.posts.url;
       $scope.github = $scope.posts.github;
       $scope.tools = $scope.posts.tools;

    }).
    error(function(data, status, headers, config) {
      // log error
    });
});


/**
 * Controls All Develop Sub Pages
 */
app.controller('DevelopSubPage', function($scope,$routeParams, $http) {
    $http.get('../data/develop-projects.json').
    success(function(data, status, headers, config) {
      var pagename = $routeParams.page;
      $scope.posts = data[pagename];
      
      //all of the pieces needed for the template
       $scope.title= $scope.posts.name
       $scope.description = $scope.posts.longDescription;
       $scope.imageOne = $scope.posts.imageOne;
       $scope.imageTwo = $scope.posts.imageTwo;
       $scope.imageThree = $scope.posts.imageThree;
       $scope.url = $scope.posts.url;
       $scope.github = $scope.posts.github;
       $scope.tools = $scope.posts.tools;

    }).
    error(function(data, status, headers, config) {
      // log error
    });

   

});

