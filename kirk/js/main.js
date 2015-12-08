var myApp = angular.module('myApp', ['firebase'])


myApp.controller('myCtrl', function($scope){
  
  $scope.login = function() {
    var ref = new Firebase("https://ourtrip.firebaseio.com");
    ref.authWithOAuthRedirect("facebook", function(error, authData) {
      if (error) {
        console.log("Login Failed!", error);
      } else {
        // console.log("Authenticated successfully with payload:", authData);
      }
    });
  }

})

