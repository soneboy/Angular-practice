angular
    .module('MyApp')
    .controller('userController', userFunction);

function userFunction(UserId, $http, $location, $timeout, $q, $log, ajax) {

       var user = this;

       ajax.get('users?name=' + $location.search().username).then(function(response){

            user.fullProfile = response.data[0];
       }, function(error){
         console.log(error.statusText);
       });

       UserId.id($location.search().username).then(function(response){

         ajax.get('posts?userId=' + response.data[0].id).then(function(response2){

          user.userPosts = response2.data;

                 }, function(error){
                   console.log(error.statusText);
                 });
          });

 }
