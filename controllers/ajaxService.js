(function(){

  var getHttpCall = function($http){


        var getRequest = function(path){

          return  $http.get('http://jsonplaceholder.typicode.com/' + path);
      }

        return {
          get: getRequest
        }
}
       angular.module('MyApp')
      .factory('ajax', getHttpCall);

})();
