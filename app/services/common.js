app.factory("registerFactory",['$http','apiUrl','$q',function($http,apiUrl,$q){

    var register = function(source){
        var defer = $q.defer();
        $http({
            method: 'POST',
            url: apiUrl.url+"/v1/auth/register",
            'Content-Type':'application/json',
            data:source
        }).then(function(response) {
           if(response.status === 200){
              defer.resolve(response.data);
           }else{
               defer.resolve(null);
           }
        }, function(response) {
            defer.resolve(response);
        });
        return defer.promise;
    }
    var login = function(source){
        var defer = $q.defer();
        $http({
            method: 'POST',
            url: apiUrl.url+"/v1/auth/login",
            'Content-Type':'application/json',
            data:source
        }).then(function(response) {
            if(response.status === 200){
                defer.resolve(response.data);
            }else{
                defer.resolve(null);
            }
        }, function(response) {
            defer.resolve(response);
        });
        return defer.promise;
    }
     return {
         register:register,
         login:login
     }
}])