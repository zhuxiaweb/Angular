var IshopMobile = angular.module("IshopMobile", []);
IshopMobile.controller("login_ctrl", function($scope, $window, $location, $http) {
	$scope.type = "password";
	$scope.account_remove = function(){
		$scope.account = "";
	};
	$scope.password_remove = function(){
		$scope.password = "";
	};
	$scope.change_type = function() {
		if($scope.show == "login_pashide") {
			$scope.type = "text";
			$scope.show = "login_passhow";
		} else {
			$scope.type = "password";
			$scope.show = "login_pashide";
		}
	}
	
});