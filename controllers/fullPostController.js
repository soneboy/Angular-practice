angular
    .module('MyApp')
    .controller('fullPostsController', fullPostsControllerFunc);

function fullPostsControllerFunc($http, $location, UserId, ajax) {

        var post = this;
        ajax.get('posts?id=' + $location.search().postId).then(function(response){

            var localObject = {};
            localObject.title = response.data[0].title;
            localObject.body = response.data[0].body;
            localObject.author = $location.search().author;

          ajax.get('comments?postId=' + $location.search().postId).then(function(response2){

                          localObject.comments = response2.data;
                          post.fullPost =localObject;

            }, function(error){
              console.log(error.statusText);
            });
        });


 }
