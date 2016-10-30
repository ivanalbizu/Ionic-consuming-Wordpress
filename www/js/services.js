(function() {
  'use strict';


  angular.module('app.services', [])
    .factory('TeamService', TeamService)
    .factory('ServicePostService', ServicePostService)
    .factory('ClientService', ClientService)
    .factory('WorkService', WorkService);

  TeamService.$inject = ['$http', '$rootScope', 'URL_API'];
  function TeamService($http, $rootScope, URL_API) {
    console.log('Entra en servicio TeamService');
    return {
      getAllData: getAllData,
      getOneData: getOneData,
    };

    function getAllData() {
      return $http({
        method : "GET",
        url : URL_API.BASE_URL + '/wp/v2/team',
      }).then(function(response) {
        console.log(response);
        return response.data;
      }, function(error) {
        console.log(error);
      });
    }

    function getOneData(id) {
      return $http({
        method : "GET",
        url : URL_API.BASE_URL + '/wp/v2/team/' + id,
      }).then(function(response) {
        return response.data;
      }, function(error) {
        console.log(error);
      });
    }

  }

  ServicePostService.$inject = ['$http', '$rootScope', 'URL_API'];
  function ServicePostService($http, $rootScope, URL_API){
    console.log('Entra en servicio ServicePostService');
    return {
      getAllData: getAllData,
    };

    function getAllData() {
      return $http({
        method : "GET",
        url : URL_API.BASE_URL + '/wp/v2/service',
      }).then(function(response) {
        console.log(response);
        return response.data;
      }, function(error) {
        console.log(error);
      });
    }
  }

  ClientService.$inject = ['$http', '$rootScope', 'URL_API'];
  function ClientService($http, $rootScope, URL_API){
    console.log('Entra en servicio ClientService');
    return {
      getAllData: getAllData,
    };

    function getAllData() {
      return $http({
        method : "GET",
        url : URL_API.BASE_URL + '/wp/v2/client',
      }).then(function(response) {
        console.log(response);
        return response.data;
      }, function(error) {
        console.log(error);
      });
    }
  }

  WorkService.$inject = ['$http', '$rootScope', 'URL_API'];
  function WorkService($http, $rootScope, URL_API){
    return {
      getAllData: getAllData,
      getOneData: getOneData,
    };

    function getAllData() {
      return $http({
        method : "GET",
        url : URL_API.BASE_URL + '/wp/v2/work',
      }).then(function(response) {
        return response.data;
      }, function(error) {
        console.log(error);
      });
    }

    function getOneData(id) {
      return $http({
        method : "GET",
        url : URL_API.BASE_URL + '/wp/v2/work/' + id,
      }).then(function(response) {
        return response.data;
      }, function(error) {
        console.log(error);
      });
    }

  }

})();
