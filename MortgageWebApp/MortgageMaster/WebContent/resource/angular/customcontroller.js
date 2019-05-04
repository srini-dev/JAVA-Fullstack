/**
 * 
 */
	angular.module('pulsApp').controller('custmController', ['$scope', '$filter', 'custmService', function($scope,$filter, custmService) {
   
	 $scope.Customer={id:0,cId:null,cstNm:"",cAdd:"",cPho1:"",cPho2:"",cItm:"",cwt:0.0,cGvnAmt:0.0,cRtInt:0.0,cRtnAmt:0.0,ctopay:0.0,cGvnDt:null,cRtnDt:new Date,cPsn:0,vtsNm:"",vPlac:"",vpho1:"",vpho2:"",cpay:"",cpic:"",cplc:""}
	 
	 
	 $scope.Customers=[]
	 $scope.CustomersOff=[]
	 $scope.xData=""
	$scope.data_on=false;
	$scope.data_off=false;
	
	$scope.a1=false;
	$scope.a2=false;
	$scope.a3=false;
	$scope.a4=false;
	$scope.a5=false;
	$scope.a6=false;
	$scope.a7=false;
	$scope.a8=false;
	$scope.a9=false;
	$scope.a10=false;
	$scope.a11=false;
	$scope.a12=false;
	
	
	
	$scope.maxId=0;
	getMaxCstmId();
	$scope.rtnDate=new Date();
//	$scope.getAllOffCustm()
	
	
	
	$scope.getOnData=function(){
		
		 $scope.data_on=true;
	 	 $scope.data_off=false;
//		 getAllCustm();
	 	 onloadOnList()
	 }
	$scope.getOffData=function(){
		 $scope.data_on=false;
	 	 $scope.data_off=true;
		 getAllOffCustm();
		 }
		
	    function getAllCustm(){
		 custmService.getAllCustm()
	        .then(
	        function(d) {
	        	$scope.Customers = d;
	        	
	        },
	        function(errResponse){});
	    }
		 function getAllOffCustm(){
			 custmService.getAllOffCustm()
		        .then(
		        function(d) {
		        	$scope.CustomersOff = d;
		        	var dts=$scope.Customer.cGvnDt.split("/");
			 		$scope.Customer.cGvnDt= new Date(dts[2], dts[1], dts[0])
		        },
		        function(errResponse){});
		    }
		 
		 function fetchAllCustomOnFrom(x,y){
			 custmService.fetchAllCustomOnFrom(x,y)
		        .then(
		        function(d) {
		        	$scope.Customers = d;
		        	
		        },
		        function(errResponse){});
		    }
		 function fetchAllCustomOffFrom(x,y){
			 custmService.fetchAllCustomOffFrom(x,y)
		        .then(
		        function(d) {
		        	$scope.CustomersOff = d;
		        	var dts=$scope.Customer.cGvnDt.split("/");
			 		$scope.Customer.cGvnDt= new Date(dts[2], dts[1], dts[0])
		        },
		        function(errResponse){});
		    }
		 function getMaxCstmId(){
			
			 custmService.getMaxId()
		        .then(
		        function(d) {
		        	$scope.maxId = d;
		        	$scope.Customer.id=d;
		        	MyButtons()
		        },
		        function(errResponse){});
		    }
		 function onloadOnList(){
				if($scope.maxId>3000)
					fetchAllCustomOnFrom(1,2000)
				else
					fetchAllCustomOnFrom(x,$scope.maxId-1)
			}
	 	$scope.addUCustmData=function(Customr,x)
	    {
	 	
	 		console.log(Customr)
	 		if(x=="off")
	 		Customr.cpay="off"
	 		if(x=="on")
	 		Customr.cpay="on"
	 		Customr.cRtnDt= $filter('date')(Customr.cRtnDt, 'dd/MM/yyyy');
//	 		alert(Customer.cRtnDt)
	 		Customr.cGvnDt = $filter('date')(Customr.cGvnDt, "dd/MM/yyyy");
	 		custmService.addCustmData(Customr)
	 		
	 		
	    	 
	        .then(
	        		function(responce){
	        			getAllCustm();
	        			succsav("Saved Succefuly")
	        		},
	        		function(errResponse){
	        			err('Not Scaved');
	        });
	    }
	 	
	 	$scope.getEditable=function(custom,rtnDt){
//	 		$scope.clearAllFld()
//	 		alert("Done")
	 		$scope.Customer=custom;
	 		$scope.Customer.cRtnDt=rtnDt
	 		nDays=getNumOfDays($scope.Customer)
	 		var tint=calcInterest($scope.Customer.cRtInt,$scope.Customer.cGvnAmt,nDays)
	 		$scope.Customer.cRtnAmt=tint.toFixed(2)
	 		var gAmt=$scope.Customer.cGvnAmt
	 		var tot=tint+gAmt
	 		
	 		$scope.Customer.ctopay=tot.toFixed(2)
	 		
	 		var dts=$scope.Customer.cGvnDt.split("/");
	 		$scope.Customer.cGvnDt=new Date(Number(dts[2]), Number(dts[1]-1),  Number(dts[0]));
	 		

	 	}
	 	
	    $scope.getCalc=function(Customer,rtnDt){
	    	$scope.Customer=Customer
	    	var ndt=$scope.Customer.cGvnDt.split("/")
	    	var span = document.createElement("span");
	    	
	    	var nndt=ndt[1]+'/'+ndt[0]+'/'+ndt[2];
	    	var fdt=new Date(nndt);

	    	
	    	var ffdt=fdt.getFullYear()+'/'+(fdt.getMonth()+1)+'/'+fdt.getDate();
//	    	var sdt=new Date()
	    	var sdt=$scope.rtnDate;
	    	alert(sdt)
	    	var d1=new Date(sdt);
	    	var d2=new Date(fdt)
	    	var timDif=(d1.getTime()-d2.getTime());
	    	var dyDif=Math.ceil(timDif/(1000*3600*24));
	    	var monDay=dyDif/30;

	    	$scope.tdy=new Date($scope.rtnDate);
	    	var rtnDt= $filter('date')($scope.tdy, 'dd/MM/yyyy');
	    	var gvnDt = $filter('date')($scope.Customer.cGvnDt, "dd/MM/yyyy");
	    	
	    	var y1=sdt.getFullYear();
	    	var y2=fdt.getFullYear()
	    	var m1=sdt.getMonth();
	    	var m2=fdt.getMonth()
	    	var dy1=sdt.getDate();
	    	var dy2=fdt.getDate()
	    	var yy=y1-y2
	    	var mm=m1-m2
	    	var ddy=dy1-dy2
	    	var tm=0;
	    	if(mm<0){
	    		tm=yy*12
	    		tm=(tm+mm);
	    		
	    	}else if(mm>0){
	    		tm=(yy*12)-mm;
	    	}
	    	
	    	var str=tm+" Months "+ddy+" Days"
	    	
	    	var x=($scope.Customer.cGvnAmt*$scope.Customer.cRtInt)/100
	    	
	    	var nd=dyDif;
	    	var intr=$scope.Customer.cRtInt;
	    	intPdy=intr/30
	    	tIntr=nd*intPdy;
	    	//interest calulation as bellow
	    	var pm=$scope.Customer.cRtInt;
//	    	var py=12*pm
//	    	var pd=py/365
//	    	var tint=($scope.Customer.cGvnAmt/100)*pd*dyDif
	    	var tint=calcInterest($scope.Customer.cRtInt,$scope.Customer.cGvnAmt,dyDif)
	    	var totAmt=tint+$scope.Customer.cGvnAmt
	    	
//	    	alert(" pm =>"+pm+" py=>"+py+" pd=>"+pd+" int=>"+tint.toFixed(2));
	    	span.innerHTML="<b>Name : "+$scope.Customer.cstNm+"<br> Items : "+$scope.Customer.cItm+"<br>Given Date "+gvnDt+"<br>Rate Of Int :"+$scope.Customer.cRtInt+"<br> Given Amount :"+$scope.Customer.cGvnAmt+"<br><br>"+" Return Date"+rtnDt+"<br>"+str +"<br>Days : "+dyDif+"<br> Total Interset : "+tint.toFixed(2)+"<br> Total Amout to Pay : "+totAmt.toFixed(2)+"</b>";
	    	
	    	
	    	succ(span);
	    }
	   function calcInterest(rInt,gAmt,nDys){
		   var pm=rInt;
	    	var py=12*pm
	    	var pd=py/365
	    	var tint=(gAmt/100)*pd*nDys
	    	return tint;
	   }
	   $scope.clearAllFld= function (){
//			$scope.Customer.id=0;
			$scope.Customer.cId=null;	$scope.Customer.cstNm="";
			$scope.Customer.cAdd=null;$scope.Customer.cplc=null;$scope.Customer.cPho1=null;$scope.Customer.cPho2=null;
			$scope.Customer.cItm="";$scope.Customer.cwt=0.0;
			$scope.Customer.cGvnDt=new Date();$scope.Customer.cGvnAmt=0.0;$scope.Customer.cRtInt=0.0;
			$scope.Customer.cRtnDt=new Date(); $scope.Customer.cRtnAmt=0.0;$scope.Customer.ctopay=0.0;
			$scope.Customer.cPsn=0;

			$scope.Customer.cpay=null;$scope.Customer.cpic=null;
			$scope.Customer.vtsNm="";$scope.Customer.vPlac=null;$scope.Customer.vpho1=null;$scope.Customer.vpho2=null;
			getMaxCstmId();
		}
	
	    function succ(msg){
	      	 swal({
	               title: "",
	               content:msg,
	               text: " ",
	               icon: "success",
	               button: "OK",
	               });
	      }
	    function succsav(msg){
	      	 swal({
	               title: "",
	               text:msg,
	               icon: "success",
	               button: "OK",
	               });
	      }
	      function err(msg){
	   		 swal({
	           title: msg,
	           text: " ",
	           icon: "error",
	           button: "OK",
	           });
	      }
	      
	      function getNumOfDays(Customer){
	    	  $scope.Customer=Customer
		    	var ndt=$scope.Customer.cGvnDt.split("/")
		    	var span = document.createElement("span");
		    	
		    	var nndt=ndt[1]+'/'+ndt[0]+'/'+ndt[2];
		    	var fdt=new Date(nndt);

		    	
		    	var ffdt=fdt.getFullYear()+'/'+(fdt.getMonth()+1)+'/'+fdt.getDate();
//		    	var sdt=new Date()
		    	var sdt=$scope.rtnDate;
//		    	alert(sdt)
		    	var d1=new Date(sdt);
		    	var d2=new Date(fdt)
		    	var timDif=(d1.getTime()-d2.getTime());
		    	var dyDif=Math.ceil(timDif/(1000*3600*24));
		    	return dyDif;
	      }
	
	    $scope.getList=function(x,y){
	    	alert("Done")
	    	fetchAllCustomOnFrom(x,y)
	    }
	    function MyButtons(){
	    	var rec=$scope.maxId
	    	alert(rec)
	    	if(rec>=2000){$scope.a1=true}
	    	if(rec>=4000){$scope.a2=true}
	    	if(rec>=6000){$scope.a3=true}
	    	if(rec>=8000){$scope.a4=true}
	    	if(rec>=10000){$scope.a5=true}
	    	if(rec>=12000){$scope.a6=true}
	    	if(rec>=rec-1){$scope.a7=true}
	    	if(rec>=16000){$scope.a8=true}
	    	if(rec>=18000){$scope.a9=true}
	    	if(rec>=20000){$scope.a10=true}
	     }
    
    }]);
	
	
	