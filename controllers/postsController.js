angular
    .module('MyApp')
    .controller('postsController', postFunction);

function postFunction($http, $timeout, $q, $log, ajax) {

  var self = this;
  var local_search_array = [];


  ajax.get('posts').then(function(response){

     var local_post_object = {};
     var local_post_array = [];

      for(var k =0; k < response.data.length; k++){

             var local_search_object = {};
             var local_post_object = {};

             local_search_object.value = response.data[k].title;
             local_search_object.display = response.data[k].title.toUpperCase();
             local_search_array.push(local_search_object);

             local_post_object.title = response.data[k].title;
             local_post_object.id = response.data[k].id;
             local_post_array.push(local_post_object);
      }

      //**************************************************** Autocomplete plugin *********************************************************

      self.searchText = "";
      self.simulateQuery = false;
      self.isDisabled    = false;
      self.searchPosts   = local_search_array;
      self.querySearch   = querySearch;
      self.selectedItemChange = selectedItemChange;
      self.searchTextChange   = searchTextChange;

      self.newState = newState;

      function newState(state) {
        alert("Sorry! You'll need to create a Constituion for " + state + " first!");
      }

      function querySearch (query) {
        filterSearch = query;
        var results = query ? self.searchPosts.filter(createFilterFor(query) ) : self.searchPosts,
            deferred;
        if (self.simulateQuery) {
          deferred = $q.defer();
          $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
          return deferred.promise;
        } else {
          return results;
        }
      }

      function searchTextChange(text) {
        $log.info('Text changed to ' + text);
      }

      function selectedItemChange(item) {
        $log.info('Item changed to ' + JSON.stringify(item));
      }

      function createFilterFor(query) {

        var lowercaseQuery = angular.lowercase(query);

        return function filterFn(state) {
          return (state.value.indexOf(lowercaseQuery) === 0);
        };

      }

//*************************************************************** end of Autocomplete plugin *******************************************************************************



        ajax.get('users').then(function(responseSecond){

      var users = responseSecond.data;

      for(var i =0; i < local_post_array.length; i++){

          for(var j = 0; j < users.length; j++){

             if(response.data[i].userId === users[j].id){

                local_post_array[i].user = users[j].name;
                local_post_array[i].idUser = users[j].id;
        }
      }
     }
  }, function(error){
    console.log(error.statusText);
  });

    self.testPosts = local_post_array;

 }, function(error){
   console.log(error.statusText);
 });

}
