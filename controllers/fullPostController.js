angular
    .module('MyApp')
    .controller('fullPostsController', fullPostsControllerFunc);

function fullPostsControllerFunc($http, $location, UserId) {

        var post = this;
        $http.get('http://jsonplaceholder.typicode.com/posts?id=' + $location.search().postId).then(function(response){

            var localObject = {};
            localObject.title = response.data[0].title;
            localObject.body = response.data[0].body;
            localObject.author = $location.search().author;

            $http.get('http://jsonplaceholder.typicode.com/comments?postId=' + $location.search().postId).then(function(response2){

                          localObject.comments = response2.data;
                          post.fullPost =localObject;

            });
        });

        console.log(UserId.id('Ervin Howell'));
 }
