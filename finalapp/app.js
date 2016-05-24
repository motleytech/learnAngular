var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource'])

weatherApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'homeController'
    })
    .when('/forecast', {
      templateUrl: 'pages/forecast.html',
      controller: 'forecastController'
    })
})

weatherApp.service('appservice', function () {
  this.cityname = '-- no city selected --'
})


weatherApp.controller('homeController', ['$scope', 'appservice', function (scope, aps) {
  scope.cityname = aps.cityname
  scope.$watch('cityname', function () {
    console.log(scope.cityname);
    aps.cityname = scope.cityname
  })
  scope.onFocus = function () {
    if (scope.cityname === '-- no city selected --') {
      scope.cityname = ''
      aps.cityname = scope.cityname
    }
  }
  scope.onBlur = function () {
    if (scope.cityname === '') {
      scope.cityname = '-- no city selected --'
      aps.cityname = scope.cityname
    }
  }
}])

weatherApp.controller('forecastController', ['$scope', '$resource', 'appservice', function (scope, resource, aps) {
  scope.cityname = aps.cityname
  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?APPID=caa890008493be79f9414876b988f9e7"
  scope.weatherAPI = resource(url, {
      callback: "JSON_CALLBACK",
    }, {
      get: { method: "JSONP" },
    })

  scope.weatherResult = scope.weatherAPI.get({
    q: scope.cityname,
    units: 'metric',
    mode: 'json',
    cnt: 2
  })

  console.log(scope.weatherResult);

}])
