smart
    .controller('RootPageController', function ($scope, $ionicSideMenuDelegate, model) {

    model.sayHello();

    $scope.data = model.getModel();


    })

    .controller('NavController', function ($scope, $ionicSideMenuDelegate) {
        $scope.toggleLeft = function () {
            $ionicSideMenuDelegate.toggleLeft();
        };
    })
    .controller('FstController', function ($scope, $ionicSideMenuDelegate) {})
    .controller('FstHomePageController', function ($scope, $ionicSideMenuDelegate, model) {
    $scope.data = model.getModel();
})
    .controller('FstFirstPageController', function ($scope, $ionicSideMenuDelegate) {})
    .controller('FstSecondPageController', function ($scope, $ionicSideMenuDelegate) {})


    .controller('AddController', function ($scope, $ionicSideMenuDelegate) {})
    .controller('AddDeviceController', function ($scope, $ionicSideMenuDelegate) {})
    .controller('AddSensorController', function ($scope, $ionicSideMenuDelegate) {})

    .controller('MapController', function ($scope, $ionicSideMenuDelegate) {

    navigator.geolocation.getCurrentPosition(showPosition);

    function showPosition(position) {
        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var mapOptions = {
            center: latLng
            , zoom: 15
            , mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
//        google.maps.event.addListenerOnce($scope.map, 'idle', function () {
//            var marker = new google.maps.Marker({
//                map: $scope.map
//                , animation: google.maps.Animation.DROP
//                , position: latLng
//            });
//        });
        google.maps.event.addListenerOnce($scope.map, 'idle', function () {
            var marker = new google.maps.Marker({
                map: $scope.map
                , animation: google.maps.Animation.DROP
                , icon : 'img/pin.png'
                , position: latLng
            });
            var infoWindow = new google.maps.InfoWindow({
                content: "Here I am!"
            });
            google.maps.event.addListener(marker, 'click', function () {
                infoWindow.open($scope.map, marker);
            });

             google.maps.event.addListener($scope.map, 'click', function(event) {
                  var marker = new google.maps.Marker({
        position: event.latLng,
        map: $scope.map
    });

});

function placeMarker(location) {

}

        });




  }






})

