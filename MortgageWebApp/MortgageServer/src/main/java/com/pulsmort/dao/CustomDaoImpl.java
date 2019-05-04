package com.pulsmort.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import com.pulsmort.model.Customer;


public class CustomDaoImpl implements CustomDao{

	@Autowired
	SessionFactory sessionFactory;
	
	public CustomDaoImpl(SessionFactory sessionFactory){
		this.sessionFactory=sessionFactory;
	}
	
	@Transactional
	public void insertOrUpdate(Customer customer) {
		sessionFactory.getCurrentSession().saveOrUpdate(customer);
		
	}

	@Transactional
	public List<Customer> getAll() {
		@SuppressWarnings("unchecked")
		List<Customer> listcustm = (List<Customer>) sessionFactory.getCurrentSession()
				.createCriteria(Customer.class)
				.setResultTransformer(Criteria.DISTINCT_ROOT_ENTITY).list();

		return listcustm;
		
	}

	@Transactional
	public void delCustomerById(Customer customer) {
		sessionFactory.getCurrentSession().delete(customer);
	}
	@Transactional
	public List<Customer> getAllOn() {
		String hql = "from Customer where  cpay='on'";
		Query query = sessionFactory.getCurrentSession().createQuery(hql);
		@SuppressWarnings("unchecked")
		List<Customer> cstmList = (List<Customer>) query.list();
		
		if (cstmList != null && !cstmList.isEmpty()) {
			return cstmList;
		}
		return null;
	
	}
	@Transactional
	public List<Customer> getAllOff() {
		String hql = "from Customer where  cpay='off'";
		Query query = sessionFactory.getCurrentSession().createQuery(hql);
		@SuppressWarnings("unchecked")
		List<Customer> cstmList = (List<Customer>) query.list();
		
		if (cstmList != null && !cstmList.isEmpty()) {
			return cstmList;
		}
		return null;
	}

	@Transactional
	public int getMaxCstmId() {
		Query query = sessionFactory.getCurrentSession().createQuery("select max(id) from Customer");
 		int x=(Integer)query.uniqueResult();
 		return x+1;
	}

	@Transactional
	public void Update_OffToOn(Customer customer) {
		String hql = "UPDATE Customer set cpay = :cpay "  + 
	             "WHERE id = :id";
		Query query = sessionFactory.getCurrentSession().createQuery(hql);
		query.setParameter("cpay", "on");
		query.setParameter("id", customer.getId());
		int result = query.executeUpdate();
		System.out.println("Rows affected: " + result);
		
	}

	@Transactional
	public List<Customer> getAllOnFrom(int x, int y) {
		String hql = "from Customer where  cpay='on' and id>="+x+" and id<="+y;
		Query query = sessionFactory.getCurrentSession().createQuery(hql);
		@SuppressWarnings("unchecked")
		List<Customer> cstmList = (List<Customer>) query.list();
		
		if (cstmList != null && !cstmList.isEmpty()) {
			return cstmList;
		}
		return null;
	}

	@Transactional
	public List<Customer> getAllOffFrom(int x, int y) {
		String hql = "from Customer where  cpay='off' and id>="+x+" and id<="+y;
		Query query = sessionFactory.getCurrentSession().createQuery(hql);
		@SuppressWarnings("unchecked")
		List<Customer> cstmList = (List<Customer>) query.list();
		
		if (cstmList != null && !cstmList.isEmpty()) {
			return cstmList;
		}
		return null;
	}
	

}
