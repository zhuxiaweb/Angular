var IshopMobile = angular.module("IshopMobile", []);
IshopMobile.controller("restrievePasswordCtrlNext", function($scope, $interval) {
	$scope.type="password";
	$scope.change_type = function(){
		if($scope.type == "password"){
			$scope.type = "text";
			$scope.show = "show"
		}else {
			$scope.type = "password";
			$scope.show = "";
		};
	};
	$scope.remove_password = function() {
		$scope.new_password = "";
	};
});