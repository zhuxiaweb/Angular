var app = angular.module('myApp', []);
app.controller('namesCtrl', function($scope){
    $scope.names = [
    {name:'Jani',country:'Norway'},
    {name:'Hege',country:'Sweden'},
    {name:'Kai',country:'Denmark'}
    ];
});