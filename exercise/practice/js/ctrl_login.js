var IshopMobile = angular.module("IshopMobile", []);
IshopMobile.controller("loginCtrl", function($scope, $window, $location, $http) {
        $scope.show = '';
        $scope.type = 'password';
      $scope.account_remove = function(){
        $scope.account = '';

    };
     $scope.password_remove = function(){
        $scope.password = '';

    };
    $scope.change_type = function() {
        if($scope.show == 'show') {
            $scope.show = '';
            $scope.type = 'password';
        } else{
            $scope.show = 'show';
            $scope.type = 'text';
        }
    };
    $scope.keep_loginInfor = function() {
        if($scope.check_keep == 'check') {
            $scope.check_keep = '';
        }else{
            $scope.check_keep = 'check';
        }
    }
});