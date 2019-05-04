package com.pulsmort.restctrler;

import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.support.DefaultMultipartHttpServletRequest;
import org.springframework.web.util.UriComponentsBuilder;

import com.pulsmort.dao.CustomDao;
import com.pulsmort.model.Customer;
import java.io.*;


@RestController
public class TransController {

	
	@Autowired
	Customer customer;
	@Autowired
	CustomDao customDao;
	
	// http://localhost:8181/MortgageServer/customlist
		@RequestMapping(value = "/customlist", method = RequestMethod.GET)
	    public ResponseEntity<List<Customer>> getAllUsersOn() {
	        List<Customer> lst = customDao.getAllOn();
	        if(lst.isEmpty()){
	            return new ResponseEntity<List<Customer>>(HttpStatus.NO_CONTENT);
	        }
	        return new ResponseEntity<List<Customer>>(lst, HttpStatus.OK);
	    }
		// http://localhost:8181/MortgageServer/customlistpaid
				@RequestMapping(value = "/customlistpaid", method = RequestMethod.GET)
			    public ResponseEntity<List<Customer>> getAllUsersOff() {
			        List<Customer> lst = customDao.getAllOff();
			        if(lst.isEmpty()){
			            return new ResponseEntity<List<Customer>>(HttpStatus.NO_CONTENT);
			        }
			        return new ResponseEntity<List<Customer>>(lst, HttpStatus.OK);
			    }
		//http://localhost:8181/MortgageServer/custm/insert/
		@RequestMapping(value = "/custm/insert/", method = RequestMethod.POST )
	    public ResponseEntity<Void> createUsers(@ModelAttribute("customer") Customer custm, @RequestBody Customer customer,   UriComponentsBuilder ucBuilder) {
	       customDao.insertOrUpdate(customer);
	       HttpHeaders headers = new HttpHeaders();
	       return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	    }
//		http://localhost:8181/MortgageServer/maxCustmId
		@RequestMapping(value = "/maxCustmId", method = RequestMethod.GET)
	    public ResponseEntity<Integer> getMaxRcpt() {
	    	Integer maxVal=customDao.getMaxCstmId();
	        
	        if(maxVal==0){
	            return new ResponseEntity<Integer>(HttpStatus.NO_CONTENT);
	        }
	        return new ResponseEntity<Integer>(maxVal, HttpStatus.OK);
	    }
		
//		http://localhost:8181/MortgageServer/customlist/ondata/x/y
		@RequestMapping(value = "/customlist/ondata/{x}/{y}", method = RequestMethod.GET)
		 public ResponseEntity<List<Customer>> getAlCustmOnFrom(@PathVariable("x") int x,@PathVariable("y") int y) {
	       List<Customer> lst=  customDao.getAllOnFrom(x, y);
	        if (lst.size() == 0) {
	            System.out.println("User with id  not found");
	            return new ResponseEntity <List<Customer>>(HttpStatus.NOT_FOUND);
	        }
	        return new ResponseEntity<List<Customer>>(lst, HttpStatus.OK);
	    }
//		http://localhost:8181/MortgageServer/customlist/offdata/x/y
		@RequestMapping(value = "/customlist/offdata/{x}/{y}", method = RequestMethod.GET)
		 public ResponseEntity<List<Customer>> getAlCustmOffFrom(@PathVariable("x") int x,@PathVariable("y") int y) {
	       List<Customer> lst=  customDao.getAllOffFrom(x, y);
	        if (lst.size() == 0) {
	            System.out.println("User with id  not found");
	            return new ResponseEntity <List<Customer>>(HttpStatus.NOT_FOUND);
	        }
	        return new ResponseEntity<List<Customer>>(lst, HttpStatus.OK);
	    }

}
