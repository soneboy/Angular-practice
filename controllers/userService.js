(function(){

  var getUserId = function($http){

        var outOfScope ={};

        var getUser = function(name){

          return  $http.get('http://jsonplaceholder.typicode.com/users?name=' + name);
      }

        return {
          id: getUser
        }
}
       angular.module('MyApp')
      .factory('UserId', getUserId);

})();
