app.controller("loginController", ['$scope','registerFactory',function($scope,registerFactory){
    $scope.login = function(){
        registerFactory.login({email:$scope.email,password:$scope.password}).then(function(data){
            console.log(data);
        });
    }
}]);
