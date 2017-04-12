app.controller('main',['socketConnectionFactory',function(socketConnectionFactory){
    socketConnectionFactory.connection().then(function(socket){
        window.socket_connection = socket;
    });
}]);