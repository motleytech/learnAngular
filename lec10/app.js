var myAngularApp = angular.module('myAngularApp', ['ngRoute'])

myAngularApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/main.html',
      controller: 'mainController',
    })
    .when('/second/', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    })
    .when('/second/:id', {
      templateUrl: 'pages/second.html',
      controller: 'secondController'
    })
})

myAngularApp.service('nameService', function () {
  var that = this
  this.name = 'John Doe';
  this.nameLength = function () {
    return that.name.length
  }
})

myAngularApp.controller('mainController', ['$scope', '$location', '$log', '$routeParams', 'nameService', function (scope, location, log, rp, ns) {
  scope.name = ns.name
  scope.people = [
    {
      name: 'James Franco',
      address: '555 Aux street',
      city: 'San Fran',
      state: 'CA',
      zip: '94080',
    },
    {
      name: 'George Takei',
      address: '222 Queer street',
      city: 'New York',
      state: 'New York',
      zip: '12431',
    },
    {
      name: 'Tom Hanks',
      address: '532 Wonderful street',
      city: 'Los Angeles',
      state: 'CA',
      zip: '94234',
    }
  ]

  scope.formattedAddress = function (person) {
    return person.address + ', ' + person.city + ', ' + person.state
  }

  scope.$watch('name', function (val) {
    ns.name = val
  })
}])

myAngularApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams', 'nameService', function (scope, location, log, rp, ns) {
  scope.name = ns.name
  scope.path = rp.id || 'none'

  scope.$watch('name', function (val) {
    ns.name = val
  })
}])

myAngularApp.directive('searchResult', function () {
  return {
    restrict: 'AECM',
    templateUrl: 'directives/searchresult.html',
    replace: true,
    scope: {
      pObj: "=",
      faf: "=formattedAddressFunction"

    }
  }
})
