
var app = angular.module('amandaPortfolio', ['ngRoute', 'ngAnimate']);

//Configure the Routes
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    .when("/develop", {templateUrl: "partials/develop.html", controller: "DevelopCtrl"})
    .when("/design", {templateUrl: "partials/design.html", controller: "DesignCtrl"})
    .when("/resume", {templateUrl: "partials/resume.html", controller: "ResumeCtrl"})
    .when("/develop/:page", {templateUrl: "partials/portfolio.html", controller: "DevelopSubPage"})
    .when("/design/:page", {templateUrl: "partials/portfolio.html", controller: "DesignSubPage"})
    .otherwise({redirectTo: '/'});
}]);

// Controls Main Pages
app.controller('PageCtrl', function( $scope, $location, $http ) {
  $(".nav-link").removeClass("active")
  $(".nav-link.about").addClass("active")
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


// Controls Resume Page Template
app.controller("ResumeCtrl", function($scope, $http) {
  $(".nav-link").removeClass("active")
  $(".nav-link.resume").addClass("active")
});

// Controls Design Page Template
app.controller("DesignCtrl", function($scope, $http) {
  $(".nav-link").removeClass("active")
  $(".nav-link.design").addClass("active")
  $http.get('../data/design-projects.json').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
    });
});


// Controls Develop Page Template
app.controller("DevelopCtrl", function($scope, $http) {
  $(".nav-link").removeClass("active")
  $(".nav-link.develop").addClass("active")
  $http.get('../data/develop-projects.json').
    success(function(data, status, headers, config) {
      $scope.posts = data;
    }).
    error(function(data, status, headers, config) {
    });
});


// Controls Design Sub Page Template
app.controller('DesignSubPage', function($scope,$routeParams, $http) {
    $(".nav-link").removeClass("active")
    $(".nav-link.design").addClass("active")
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
  $(".nav-link").removeClass("active")
  $(".nav-link.develop").addClass("active")
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



