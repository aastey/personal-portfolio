
var app = angular.module('amandaPortfolio', ['ngRoute']);

//Configure the Routes
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    .when("/develop", {templateUrl: "partials/develop.html", controller: "PageCtrl"})
    .when("/design", {templateUrl: "partials/design.html", controller: "PageCtrl"})
    .when("/resume", {templateUrl: "partials/resume.html", controller: "PageCtrl"})
    .when("/develop/:page", {templateUrl: "partials/portfolio.html", controller: "DevelopSubPage"})
    .when("/design/:page", {templateUrl: "partials/portfolio.html", controller: "DesignSubPage"})
    .otherwise({redirectTo: '/'});
}]);

// Controls Main Pages
app.controller('PageCtrl', function( $scope, $location, $http ) {

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });
   // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  });

   $scope.isActive = function(route) {
        return route === $location.path();
    }
});


// Controls Design Page Template
app.controller("DesignCtrl", function($scope, $http) {
  $http.get('../data/design-projects.json').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
    });
});


// Controls Develop Page Template
app.controller("DevelopCtrl", function($scope, $http) {
  $http.get('../data/develop-projects.json').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
    });
});


// Controls Design Sub Page Template
app.controller('DesignSubPage', function($scope,$routeParams, $http) {
    $http.get('../data/design-projects.json').
    success(function(data, status, headers, config) {
      var pagename = $routeParams.page;
      $scope.posts = data[pagename];
      
      //all of the pieces needed for the template
       $scope.title= $scope.posts.name
       $scope.description = $scope.posts.longDescription;
       $scope.descriptionTwo = $scope.posts.longDescriptionTwo;
       $scope.descriptionThree = $scope.posts.longDescriptionThree;
       $scope.imageOne = $scope.posts.imageOne;
       $scope.imageTwo = $scope.posts.imageTwo;
       $scope.imageThree = $scope.posts.imageThree;
       $scope.url = $scope.posts.url;
       $scope.github = $scope.posts.github;
       $scope.tools = $scope.posts.tools;

    }).
    error(function(data, status, headers, config) {
    });
});


// Controls Develop Page Template
app.controller('DevelopSubPage', function($scope,$routeParams, $http) {
    $http.get('../data/develop-projects.json').
    success(function(data, status, headers, config) {
      var pagename = $routeParams.page;
      $scope.posts = data[pagename];
      
      //all of the pieces needed for the template
       $scope.title= $scope.posts.name
       $scope.description = $scope.posts.longDescription;
       $scope.descriptionTwo = $scope.posts.longDescriptionTwo;
       $scope.descriptionThree = $scope.posts.longDescriptionThree;
       $scope.imageOne = $scope.posts.imageOne;
       $scope.imageTwo = $scope.posts.imageTwo;
       $scope.imageThree = $scope.posts.imageThree;
       $scope.url = $scope.posts.url;
       $scope.github = $scope.posts.github;
       $scope.tools = $scope.posts.tools;

    }).
    error(function(data, status, headers, config) {
    });
});



