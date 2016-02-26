angular
    .module('MyApp')
    .controller('userController', userFunction);

function userFunction(UserId, $http, $location, $timeout, $q, $log) {

       var user = this;

       UserId.id($location.search().username).then(function(response){

         $http.get('http://jsonplaceholder.typicode.com/posts?userId=' + response.data[0].id).then(function(response2){

          user.userPosts = response2.data;

                 });
          });

 }
