import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.pulsmort.dao.CustomDao;
import com.pulsmort.model.Customer;

public class MyDBTest {

	public static void main(String[] args) {
		AnnotationConfigApplicationContext ctx=new AnnotationConfigApplicationContext();
		ctx.scan("com.pulsmort.*");
		ctx.refresh();
		System.out.println("Done");
		
		Customer customer=(Customer) ctx.getBean("customer");
		CustomDao customDao=(CustomDao) ctx.getBean("customDao");
		
		customer.setId(2);
		customer.setCstNm("Moorty Patil");
		customer.setcGvnDt("15/06/2016");
		customer.setcItm("Braslate, Ring");
		customDao.insertOrUpdate(customer);
		
	}
}
