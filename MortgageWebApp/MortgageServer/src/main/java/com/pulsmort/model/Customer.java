package com.pulsmort.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.stereotype.Component;
@Component
@Entity
public class Customer {
	@Id
	int id;
	String cId;
	String cstNm;
	String cAdd;
	String Cplc;
	String cPho1;
	String cPho2;
	String cItm;
	double cwt;
	double cGvnAmt;
	double cRtInt;
	double cRtnAmt;
	double ctopay;
	String cGvnDt;
	String cRtnDt;
	int cPsn;
	String vtsNm;
	String vPlac;
	String vpho1;
	String vpho2;
	String cpay;
	String cpic;
	
	public Customer(){}
	public Customer(int id, String cId, String cstNm, String cAdd, String cplc, String cPho1, String cPho2, String cItm,
			double cwt, double cGvnAmt, double cRtInt, double cRtnAmt, double ctopay, String cGvnDt, String cRtnDt,
			int cPsn, String vtsNm, String vPlac, String vpho1, String vpho2, String cpay, String cpic) {
		super();
		this.id = id;
		this.cId = cId;
		this.cstNm = cstNm;
		this.cAdd = cAdd;
		Cplc = cplc;
		this.cPho1 = cPho1;
		this.cPho2 = cPho2;
		this.cItm = cItm;
		this.cwt = cwt;
		this.cGvnAmt = cGvnAmt;
		this.cRtInt = cRtInt;
		this.cRtnAmt = cRtnAmt;
		this.ctopay = ctopay;
		this.cGvnDt = cGvnDt;
		this.cRtnDt = cRtnDt;
		this.cPsn = cPsn;
		this.vtsNm = vtsNm;
		this.vPlac = vPlac;
		this.vpho1 = vpho1;
		this.vpho2 = vpho2;
		this.cpay = cpay;
		this.cpic = cpic;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getcId() {
		return cId;
	}
	public void setcId(String cId) {
		this.cId = cId;
	}
	public String getCstNm() {
		return cstNm;
	}
	public void setCstNm(String cstNm) {
		this.cstNm = cstNm;
	}
	public String getcAdd() {
		return cAdd;
	}
	public void setcAdd(String cAdd) {
		this.cAdd = cAdd;
	}
	public String getCplc() {
		return Cplc;
	}
	public void setCplc(String cplc) {
		Cplc = cplc;
	}
	public String getcPho1() {
		return cPho1;
	}
	public void setcPho1(String cPho1) {
		this.cPho1 = cPho1;
	}
	public String getcPho2() {
		return cPho2;
	}
	public void setcPho2(String cPho2) {
		this.cPho2 = cPho2;
	}
	public String getcItm() {
		return cItm;
	}
	public void setcItm(String cItm) {
		this.cItm = cItm;
	}
	public double getCwt() {
		return cwt;
	}
	public void setCwt(double cwt) {
		this.cwt = cwt;
	}
	public double getcGvnAmt() {
		return cGvnAmt;
	}
	public void setcGvnAmt(double cGvnAmt) {
		this.cGvnAmt = cGvnAmt;
	}
	public double getcRtInt() {
		return cRtInt;
	}
	public void setcRtInt(double cRtInt) {
		this.cRtInt = cRtInt;
	}
	public double getcRtnAmt() {
		return cRtnAmt;
	}
	public void setcRtnAmt(double cRtnAmt) {
		this.cRtnAmt = cRtnAmt;
	}
	public double getCtopay() {
		return ctopay;
	}
	public void setCtopay(double ctopay) {
		this.ctopay = ctopay;
	}
	public String getcGvnDt() {
		return cGvnDt;
	}
	public void setcGvnDt(String cGvnDt) {
		this.cGvnDt = cGvnDt;
	}
	public String getcRtnDt() {
		return cRtnDt;
	}
	public void setcRtnDt(String cRtnDt) {
		this.cRtnDt = cRtnDt;
	}
	public int getcPsn() {
		return cPsn;
	}
	public void setcPsn(int cPsn) {
		this.cPsn = cPsn;
	}
	public String getVtsNm() {
		return vtsNm;
	}
	public void setVtsNm(String vtsNm) {
		this.vtsNm = vtsNm;
	}
	public String getvPlac() {
		return vPlac;
	}
	public void setvPlac(String vPlac) {
		this.vPlac = vPlac;
	}
	public String getVpho1() {
		return vpho1;
	}
	public void setVpho1(String vpho1) {
		this.vpho1 = vpho1;
	}
	public String getVpho2() {
		return vpho2;
	}
	public void setVpho2(String vpho2) {
		this.vpho2 = vpho2;
	}
	public String getCpay() {
		return cpay;
	}
	public void setCpay(String cpay) {
		this.cpay = cpay;
	}
	public String getCpic() {
		return cpic;
	}
	public void setCpic(String cpic) {
		this.cpic = cpic;
	}


}
