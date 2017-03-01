var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
    $scope.sites = {
    site01 : "Google",
    site02 : "Runoob",
    site03 : "Taobao"
};
});