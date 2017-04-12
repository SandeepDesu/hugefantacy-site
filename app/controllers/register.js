app.controller("registerController", ['$scope','registerFactory',function($scope,registerFactory){
    $scope.register = function(){
        registerFactory.register({email:$scope.email,password:$scope.password}).then(function(data){
            console.log(data);
        });
    }
}])
