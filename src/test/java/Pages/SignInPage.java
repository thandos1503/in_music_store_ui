package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import Helpers.Click;
import Helpers.ElementsValidation;
import Helpers.SendText;

public class SignInPage {

	WebDriver driver = null;
	
	public SignInPage(WebDriver driver) {
		
		this.driver = driver;
	}
	
	private By signin = By.xpath("//*[@id='customer-login-form']/fieldset/div[4]/button");
	private By email = By.xpath("//*[@id='email']");
	private By password = By.xpath("//*[@id='pass']");
	private By errormessage = By.xpath("//span[text()='The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.']");
	private By privacypolicy = By.xpath("//*[@id='customer-login-form']/fieldset/div[6]/a[1]");
	private By termsofuse = By.xpath("//*[@id='customer-login-form']/fieldset/div[6]/a[2]");
	private By forgotyourpassword = By.xpath("//*[@id='customer-login-form']/fieldset/div[2]/div[2]/div/a/span");
	private By policytitle = By.xpath("//span[text()='inMusic Privacy Policy']");
	private By termstitle = By.xpath("//span[text()='inMusic Website Terms of Use']");
	private By forgottitle = By.xpath("//span[text()='Forgot Your Password?']");
	private By myaccounttitle = By.xpath("//span[text()='My Account']");
	
	
	public void ClickPrivatePolicy() {
		
		Click.ElementClick(this.driver, privacypolicy);
	}
	
	public void ClicTermsOfuse() {
		
		Click.ElementClick(this.driver, termsofuse);
	}
	
	public void ClickForgotPassword() {
		
		Click.ElementClick(this.driver, forgotyourpassword);
	}
	
	public void ValidatePrivacyPolicyPage() {
		
		ElementsValidation.findElement(this.driver, policytitle);
	}
	
	public void ValidateTermOfusePage() {
		
		ElementsValidation.findElement(this.driver, termstitle);
	}

	public void ValidateForgotPage() {
	
		ElementsValidation.findElement(this.driver, forgottitle);
	}
	
	public void validateSignInContentExists() {
		
		ElementsValidation.findElement(this.driver, signin);
	}
	
	public void EnterValidemail() {
		
		SendText.SendKeys(this.driver, email, "thandos1503@gmail.com");
	}
	
	public void EnterInValidPassword() {
		
		SendText.SendKeys(this.driver, password, "sadsfdfw");
	}
	
	public void EnterValidPassword() {
		
		SendText.SendKeys(this.driver, password, "Abc123##");
	}
	
	public void ClickSignIn() {
		
		Click.ElementClick(this.driver, signin);
	}
	
	public void ValidateErrorMessage() {
		
		ElementsValidation.findElement(this.driver, errormessage);
	}
	
	public void ValidateLoggedIn() {
		
		ElementsValidation.findElement(this.driver, myaccounttitle);
	}
	
}
