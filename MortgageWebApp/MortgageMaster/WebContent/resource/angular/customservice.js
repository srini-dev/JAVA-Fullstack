'use strict';

angular.module('pulsApp').factory('custmService', ['$http', '$q', function($http, $q){

	var factory = {
			getAllCustm:getAllCustm,
			addCustmData:addCustmData,
			getAllOffCustm:getAllOffCustm,
			getMaxId:getMaxId,
			fetchAllCustomOnFrom:fetchAllCustomOnFrom,
			fetchAllCustomOffFrom:fetchAllCustomOffFrom,
			doUpload:doUpload
    };
    return factory;
    
    
    function getAllCustm() {
        var deferred = $q.defer();
        $http.get('http://localhost:8181/MortgageServer/customlist')
            .then(
            function (response) {
            	deferred.resolve(response.data);
            },
            function(errResponse){
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    function  getAllOffCustm() {
        var deferred = $q.defer();
        $http.get('http://localhost:8181/MortgageServer/customlistpaid')
            .then(
            function (response) {
            	deferred.resolve(response.data);
            	
            },
            function(errResponse){
            	
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    function addCustmData(customer) {
        var deferred = $q.defer();
        $http.post('http://localhost:8181/MortgageServer/custm/insert/',customer)
            .then(
            function (response) {
            	
            	deferred.resolve(response.data);
            },
            function(errResponse){
            	
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    function getMaxId() {
        var deferred = $q.defer();
        $http.get('http://localhost:8181/MortgageServer/maxCustmId')
            .then(
            function (response) {
            	deferred.resolve(response.data);
            },
            function(errResponse){
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }
    
    
    
    function fetchAllCustomOnFrom(x,y){
//    	alert("BBBB1")
        var deferred = $q.defer();
        $http.get('http://localhost:8181/MortgageServer/customlist/ondata/'+x+'/'+y)
            .then(
            function (response) {
//            	alert("BBBB2")
            	deferred.resolve(response.data);	           
            },
            function(errResponse){
                deferred.reject(errResponse);
//                alert("BBBB3 "+errResponse)
            }
        );
        return deferred.promise;
    }
    function fetchAllCustomOffFrom(x,y){
//    	alert("BBBB1")
        var deferred = $q.defer();
        $http.get('http://localhost:8181/MortgageServer/customlist/offdata/'+x+'/'+y)
            .then(
            function (response) {
//            	alert("BBBB2")
            	deferred.resolve(response.data);	           
            },
            function(errResponse){
                deferred.reject(errResponse);
//                alert("BBBB3 "+errResponse)
            }
        );
        return deferred.promise;
    }
    
    
    
    
    function doUpload(file, uploadUrl) {
    	        var fd = new FormData();
    	        fd.append('file', file);
    	        return $http.post(uploadUrl, fd, {
    	            transformRequest : angular.identity,
    	            headers : {
    	                'Content-Type' : undefined
    	            }
    	        }).success(function(response) {

    	            /* $scope.errors = response.data.value; */
    	            console.log(response);
    	            responseData = response;
    	            deffered.resolve(response);
    	            return deffered.promise;
    	        }).error(function(error) {
    	            deffered.reject(error);
    	            return deffered.promise;
    	        });

    	    }
    	 
    	
    	
    	
    	
//    	var deferred = $q.defer();
////        $http.get('http://localhost:8181/EduMaster/macstaffid')
//    	$http.post('http://localhost:8181/MortgageServer/uplod/'+form_data,{
////			transoormRequest:angular.identity,
////			headers:{'Content-type':unIdentify,'Process-Data':false}
//		})
//            .then(
//            function (response) {
//            	deferred.resolve(response);
//            	alert(response)
//            },
//            function(errResponse){
//                deferred.reject(errResponse);
//                alert(errResponse)
//            }
//        );
//        return deferred.promise;
//    }
}]);