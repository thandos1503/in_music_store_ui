package Pages;

import org.apache.commons.lang3.RandomStringUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

import Helpers.Click;
import Helpers.ElementsValidation;
import Helpers.Scroll;
import Helpers.SendText;
import Helpers.Wait;

public class RegistrationPage {

	protected WebDriver driver = null;
	protected String projectPath = System.getProperty("user.dir");
	
	public RegistrationPage(WebDriver driver) {
		
		this.driver = driver;
	}
	
	private By createaccount = By.xpath("//*[@id='customer-login-container']/div/div[3]/a");
	private By firstname = By.xpath("//*[@id='firstname']");
	private By lastname = By.xpath("//*[@id='lastname']");
	private By email = By.xpath("//*[@id='email_address']");
	private By yob = By.xpath("//*[@id='yob']");
	private By password = By.xpath("//*[@id='password']");
	private By confirmpassword = By.xpath("//*[@id='password-confirmation']");
	private By country = By.xpath("//*[@id='country']");
	private By nextstep = By.xpath("//*[@id='accountcreate']/div[4]/div[1]/button");
	
	private By brand = By.xpath("//label[@class='brand-logo cursor-pointer m-0']//img[@alt='AKAI']");
	private By agreepolicy = By.xpath("//*[@id='privacy_and_terms']");
	private By newcreateaccount = By.xpath("//*[@id='accountcreate']/div[4]/div[2]/div[1]/button");
	private By confirm = By.xpath("//*[@id='maincontent']/div[3]/div/div/div/div[4]/div[3]/h2");
	
	
	public void clickCreateAccount() {
		try {
			Wait.waitAwhile(10);
			Click.ElementClick(this.driver, createaccount);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
	}
	
	public void FillRegistrationText(String username,String secondname,String useryob,String userpassword,String userconfirmpassword) {
		
		String rndText = RandomStringUtils.randomAlphabetic(7);	
		
	    SendText.SendKeys(this.driver, firstname, username);
		SendText.SendKeys(this.driver, lastname, secondname);
		SendText.SendKeys(this.driver, email, rndText + "@gmail.com");
		SendText.SendKeys(this.driver, yob, useryob);
		SendText.SendKeys(this.driver, password, userpassword);
		SendText.SendKeys(this.driver, confirmpassword, userconfirmpassword);
	}
	
	public void SelectCountry() {
		
		try {
			Select se = new Select(this.driver.findElement(country));
			Wait.waitAwhile(2);
			se.selectByIndex(17);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void ClickNext() {
		
		try {
			Wait.waitAwhile(20);
			//Scroll.HoverToElement(driver, nextstep);
			Click.ElementClick(this.driver, nextstep);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void ClickBrand()
	{
		try {
			Wait.waitAwhile(40);
			Click.ElementClick(this.driver, brand);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void ClickAgreePolicy() {
		
		Click.ElementClick(this.driver, agreepolicy);
	}
	
	public void ClickNewCreateAccount() {
		
		Click.ElementClick(this.driver, newcreateaccount);
	}
	public void ValidateConfirmPage() {
		
		try {
			Wait.waitAwhile(10);
			ElementsValidation.findElement(this.driver, confirm);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
	} 
}
