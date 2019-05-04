package com.pulsmort.dao;

import java.util.List;

import com.pulsmort.model.Customer;

public interface CustomDao {
	
	void insertOrUpdate(Customer customer);
	List<Customer> getAllOn();
	List<Customer> getAllOff();
	
	List<Customer> getAllOnFrom(int x,int y);
	List<Customer> getAllOffFrom(int x, int y);
	
	void delCustomerById(Customer customer);
	int getMaxCstmId();
	void Update_OffToOn(Customer customer);
}
