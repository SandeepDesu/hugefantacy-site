app.factory('socketConnectionFactory', ['$q', function($q) {
    var connection = function () {
        var defer = $q.defer();
        var socket = io.connect('https://dev.hugefantacy.in:3000');
        socket.on('app', function (data) {
            if (data === 'connected') {
                defer.resolve(socket) ;
            } else {
                defer.resolve(null) ;
            }
        });
        return defer.promise;
    };

    return {
        connection : connection
    }

}])