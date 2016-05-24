var myAngularApp = angular.module('myAngularApp', [])

myAngularApp.controller('mainController', ['$scope', '$http', function (scope, http) {
  scope.handle = ''
  scope.numcharacters = 5
  scope.rules = []

  http.get("/lecture9/data.json")
    .success(function (result) {
      scope.rules = result
    })
    .error(function (data, status) {
      console.log(data, status);
    })
}])
