var IshopMobile = angular.module("IshopMobile", []);
IshopMobile.controller("restrievePasswordCtrl", function($scope, $interval) {
	$scope.text = "获取验证码";
	//删除输入
	$scope.account_remove = function() {
		$scope.account = "";
	};
	$scope.securityCode_remove = function() {
		$scope.securityCode = "";
	};
	$scope.securityImg_remove = function() {
		$scope.securityImg = "";
	};
	//倒计时
	$scope.getCode = function() {
		$scope.num = 60;
		$scope.text = $scope.num +　's重新获取';
		var time = $interval(function() {
			$scope.num --;
			$scope.text = $scope.num +　's重新获取';
			if($scope.num == 0){
				$interval.cancel(time);
				$scope.text = '重新获取'	
			} 	
		}, 1000);
	};
	//监听是否输入账号
	$scope.$watch('account', function() {
		if($scope.account != '' && typeof $scope.account != 'undefined' ) {
			$scope.security_code = "current";
		}else {
			$scope.security_code = "";
		};
	});
	$scope.$watch('securityCode', function(){
		if($scope.account != '' && typeof $scope.account != 'undefined' && $scope.securityCode.length == "4"){
			$scope.bind_code = "current";
		}else{
			$scope.bind_code = "";
		}
	})
	
});