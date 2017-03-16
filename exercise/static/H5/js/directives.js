// webrx@126.com JavaScript Document
var carStoreDirectives = angular.module("carStoreDirectives",[]);
carStoreDirectives.directive("ngHeader",function(){
	return{
		restrict:"AE",
		templateUrl:"tpls/common/header.html",
		replace:true
		}
	});
carStoreDirectives.directive("ngHeader2",function(){
	return{
		restrict:"AE",
		templateUrl:"tpls/common/header2.html",
		replace:true
		}
	});
carStoreDirectives.directive("ngFooter",function(){
	return{
		restrict:"AE",
		templateUrl:"tpls/common/footer.html",
		replace:true
		}
	});
	
