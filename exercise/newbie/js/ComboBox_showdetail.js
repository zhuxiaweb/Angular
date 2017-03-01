var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope){
    $scope.sites = [
    {site:"Google", url:"http:www.google.com"},
    {site : "Runoob", url : "https://www.runoob.com"},
    {site : "Taobao", url : "http://www.taobao.com"}
    ];
});