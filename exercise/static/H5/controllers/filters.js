// webrx@126.com JavaScript Document
var carFilters = angular.module("carFilters", []);
carFilters.filter('formatDate', function () {
    return function (olddate) {
        var d = Date.parse(new Date());
        var dateDate = new Date(Date.parse(new Date(olddate)) * 1000);
        var newdate;
        if (d - (olddate * 1000 - 8 * 3600 * 1000) > 3600 * 24 * 1000) {
			if(dateDate.getDate()<9){
				newdate = (dateDate.getMonth() + 1) + '-' +'0'+ dateDate.getDate();
				}else{
					newdate = (dateDate.getMonth() + 1) + '-' + dateDate.getDate();
					};
            
        } else {
			if(dateDate.getDate()<9){
				newdate = dateDate.getHours() + ':' +"0"+ dateDate.getMinutes();
				}else{
					newdate = dateDate.getHours() + ':' + dateDate.getMinutes();
					};         
        }
        return newdate;
    };
});
carFilters.filter('formaMoney', function () {
    return function (item) {
        return item / 10000;
    };
});
carFilters.filter('toFix', function () {
    return function (item) {
        return item;
    };
});
carFilters.filter('num', function () {
    return function (item) {
        return Number(item/100000);
    };
});