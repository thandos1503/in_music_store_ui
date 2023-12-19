package Pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import com.github.javafaker.Faker;

import Helpers.Click;
import Helpers.ElementsValidation;
import Helpers.Scroll;
import Helpers.SendText;
import Helpers.Wait;

public class SignInPage {

	WebDriver driver = null;
	Faker faker = new Faker();
	
	public SignInPage(WebDriver driver) {
		
		this.driver = driver;
	}
	
	private By signin = By.xpath("//button[contains(text(),'Sign In')]");
	private By email = By.xpath("//*[@id='email']");
	private By password = By.xpath("//div//input[@class='form-input h-12 w-full' and @title='Password']");
	private By errormessage = By.xpath("//span[text()='The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.']");
	private By privacypolicy = By.xpath("//a[text()='Privacy Policy'][1]");
	private By termsofuse = By.xpath("//a[text()='Terms of Use'][1]");
	private By forgotyourpassword = By.xpath("//span[contains(text(),'Forgot Your Password?')]");
	private By policytitle = By.xpath("//span[text()='inMusic Privacy Policy']");
	private By termstitle = By.xpath("//span[text()='inMusic Website Terms of Use']");
	private By forgottitle = By.xpath("//span[text()='Forgot Your Password?']");
	private By myaccounttitle = By.xpath("//span[text()='My Account']");
	private By myregisteredproducts = By.xpath("//h2[contains(text(),'My registered products')]");
	private By clickregisterbutton = By.xpath("//*[@id='product-registrations']/a");
	private By checkserialbutton = By.xpath("//*[@id='react-product-registrations']/div/div[3]/div/div[2]/div[1]/form/button");
	private By accountmyaccount = By.xpath("//*[@id='customer-icon']/div/div/ul/div[1]/div[2]/a");
	private By accountmyproduct = By.xpath("//*[@id='customer-icon']/div/div/ul/div[2]/div[2]/a");
	private By accountmyoffers = By.xpath("//*[@id='customer-icon']/div/div/ul/div[3]/div[2]/a");
	private By accountmyorders = By.xpath("//*[@id=\"customer-icon\"]/div/div/ul/div[5]/div[2]/a");
	private By accountmyreturns = By.xpath("//*[@id=\"customer-icon\"]/div/div/ul/div[6]/div[2]/a");
	private By accountmyinformation = By.xpath("//*[@id='customer-icon']/div/div/ul/div[7]/div[2]/a");
	
	private By accountvalidation =By.xpath("//*[@id='maincontent']/div[4]/div/div[2]/div[1]/span");
	private By productvalidation =By.xpath("//*[@id='react-product-registrations']/div/div/div[1]/div[1]/p");
	private By offersvalidation =By.xpath("//*[@id='maincontent']/div[3]/h1/span");
	private By ordersvalidation =By.xpath("//*[@id='maincontent']/div[3]/h1/span");
	private By returnsvalidation =By.xpath("//*[@id='maincontent']/div[3]/h1/span");
	private By informationvalidation =By.xpath("//*[@id='maincontent']/div[3]/h1/span");
	
	private By accountyob = By.xpath("//*[@id='yob']");
	private By accountsave = By.xpath("//*[@id='form-validate']/fieldset/div[9]/div[1]/button");
	private By savedaccountmessage = By.xpath("//*[@id='messages']/div/div/div/div");
	
	private By accountfirstname = By.xpath("//*[@id='firstname']");
	private By accountinterests = By.xpath("//*[@id='form-validate']/fieldset/div[4]/div/div[1]");

	private By registeredproducts = By.xpath("//div//a[contains(text(),'My products') and @class='no-underline relative'][1]");
	private By actualregisteredproducts = By.xpath("//*[@id='react-product-registrations']/div/div/div[1]/div[1]/p");
	
	private By ordersoverview = By.xpath("//a[contains(text(),'Order overview')]");
	private By myorderspage = By.xpath("//*[@id='maincontent']/div[3]/h1/span");
	
	private By subscribe = By.xpath("//*[@id='maincontent']/div[4]/div/div/div/div/div/div[2]/ul/li[1]/div[3]/label/div/div/span[2]");
	private By unsubscribe= By.xpath("//*[@id='maincontent']/div[4]/div/div/div/div/div/div[2]/ul/li[1]/div[3]/label/div/div/span[1]");
	private By subscribestatus = By.xpath("//span[text()='Subscribe']");
	
	
	
	public void ValidateSubscribed() {
		try {
			Wait.waitForAnElementToBeVisible(this.driver, subscribestatus, 60);
			ElementsValidation.ElementsDoesNotExists(this.driver, subscribestatus);
		} catch (Throwable error) {
			Assert.fail("ValidateSubscribed Failed, Please investigate");
		}
	}

	public void ValidateUnSubscribed() {
		try {
			Wait.waitForAnElementToBeVisible(this.driver, subscribestatus, 60);
			ElementsValidation.findElement(this.driver, subscribestatus);
		} catch (Throwable error) {
			Assert.fail("ValidateUnSubscribed Failed, Please investigate");
		}
	}

	public void ClickSubscribe() {
		try {
			Wait.waitForAnElementToBeVisible(this.driver, subscribe, 60);
			Click.JavaClick(this.driver, subscribe);
		} catch (Throwable error) {
			Assert.fail("ClickSubscribe Failed, Please investigate");
		}
	}
	
	public void ClickUnsubscribe() {
		try {
			Wait.waitForAnElementToBeVisible(this.driver, unsubscribe, 60);
			Click.JavaClick(this.driver, unsubscribe);
		} catch (Throwable error) {
			Assert.fail("ClickUnsubscribe Failed, Please investigate");
		}
	}
	
	public void ValidateMyOrdersOverview() {
		try {
			Wait.waitForAnElementToBeVisible(this.driver, myorderspage, 60);
			ElementsValidation.findElement(this.driver, myorderspage);
		} catch (Throwable error) {
			Assert.fail("ValidateMyOrdersOverview Failed, Please investigate");
		}
	}
	
	public void ValidateOdersOverview() {
		try {
			Wait.waitForAnElementToBeVisible(this.driver, ordersoverview, 60);
			Scroll.ScrollToElement(this.driver, ordersoverview);
			ElementsValidation.findElement(this.driver, ordersoverview);
		} catch (Throwable error) {
			Assert.fail("ValidateOdersOverview Failed, Please investigate");
		}
	}
	
	public void ClickOrdersOverview() {
		try {
			Wait.waitForAnElementToBeVisible(this.driver, ordersoverview, 60);
			Click.JavaClick(this.driver, ordersoverview);
		} catch (Throwable error) {
			Assert.fail("ClickOrdersOverview Failed, Please investigate");
		}
	}
	
	public void ClickRegisteredProducts() {
		try {
			Wait.waitForAnElementToBeVisible(this.driver, registeredproducts, 60);
			Click.JavaClick(this.driver, registeredproducts);
		} catch (Throwable error) {
			Assert.fail("ClickRegisteredProducts Failed, Please investigate");
		}
	}
	
	public void ValidateRegisteredProducts() {
		try {
			Wait.waitForAnElementToBeVisible(this.driver, actualregisteredproducts, 60);
			ElementsValidation.findElement(this.driver, actualregisteredproducts);
		} catch (Throwable error) {
			Assert.fail("ValidateRegisteredProducts Failed, Please investigate");
		}
	}
	
	public void UpdateInterest() {
		try {
			Wait.waitForAnElementToBeVisible(this.driver, accountinterests, 60);
			Click.JavaClick(this.driver, accountinterests);
		} catch (Throwable error) {
			Assert.fail("UpdateInterest Failed, Please investigate");
		}
	}
	
	public void UpdateFirstName() {
		
		try {
			String firstName = faker.name().firstName();
			Wait.waitForAnElementToBeVisible(this.driver, accountfirstname, 60);
			SendText.SendKeysJava(this.driver, accountfirstname, firstName);
		}catch (Throwable error) {
			Assert.fail("UpdateFirstName Failed, Please investigate");
		}
	}
	
	public void UpdatedPopUpAppears() {
		
		try {
			Wait.waitForAnElementToBeVisible(this.driver, savedaccountmessage, 60);
			ElementsValidation.findElement(this.driver, savedaccountmessage);
		} catch (Throwable error) {
			Assert.fail("UpdatedPopUpAppears Failed, Please investigate");
		}
	}
	
	public void ValidateErrorMsgOnYOB() {
		try {
			Wait.waitForAnElementToBeVisible(this.driver, savedaccountmessage, 60);
			ElementsValidation.ElementsDoesNotExists(this.driver, savedaccountmessage);
		} catch (Throwable error) {
			Assert.fail("ValidateErrorMsgOnYOB Failed, Please investigate");
		}
	}
	public void ClickSave() {
		try {
			//Wait.waitForAnElementToBeVisible(this.driver, subscribestatus, 60);
			Click.ElementClick(this.driver, accountsave);
		} catch (Throwable error) {
			Assert.fail("ClickSave Failed, Please investigate");
		}
	}
	
	public void EnterYOB(String text) {
		
		try {
			Wait.waitForAnElementToBeVisible(this.driver, accountyob, 60);
			SendText.SendKeysJava(this.driver, accountyob, text);
		} catch (Throwable error) {
			Assert.fail("EnterYOB Failed, Please investigate");
		}
	}
		
	public void ValidateAccounts()
	{
		try {
			Wait.waitForAnElementToBeVisible(this.driver, accountvalidation, 60);
			ElementsValidation.findElement(this.driver, accountvalidation);
		} catch (Throwable error) {
			Assert.fail("ValidateAccounts Failed, Please investigate");
		}
	}
	
	public void ValidateProducts()
	{
		try {
			Wait.waitForAnElementToBeVisible(this.driver, productvalidation, 60);
			ElementsValidation.findElement(this.driver, productvalidation);
		} catch (Throwable error) {
			Assert.fail("ValidateProducts Failed, Please investigate");
		}
	}
	
	public void ValidateOffers()
	{
		try {
			Wait.waitForAnElementToBeVisible(this.driver, offersvalidation, 60);
			ElementsValidation.findElement(this.driver, offersvalidation);
		} catch (Throwable error) {
			Assert.fail("ValidateOffers Failed, Please investigate");
		}
	}
	
	public void ValidateOrders()
	{
		try {
			Wait.waitForAnElementToBeVisible(this.driver, ordersvalidation, 60);
			ElementsValidation.findElement(this.driver, ordersvalidation);
		} catch (Throwable error) {
			Assert.fail("ValidateOrders Failed, Please investigate");
		}
	}
	
	public void ValidateReturns()
	{
		try {
			Wait.waitForAnElementToBeVisible(this.driver, returnsvalidation, 60);
			ElementsValidation.findElement(this.driver, returnsvalidation);
		} catch (Throwable error) {
			Assert.fail("ValidateReturns Failed, Please investigate");
		}
	}
	
	public void ValidateInformation()
	{
		try {
			Wait.waitForAnElementToBeVisible(this.driver, informationvalidation, 60);
			ElementsValidation.findElement(this.driver, informationvalidation);
		} catch (Throwable error) {
			Assert.fail("ValidateInformation Failed, Please investigate");
		}
	}
	
	public void ClickMyAccount()
	{
		try {
			Wait.waitForAnElementToBeVisible(this.driver, accountmyaccount, 60);
			Click.JavaClick(this.driver, accountmyaccount);
		} catch (Throwable error) {
			Assert.fail("ClickMyAccount Failed, Please investigate");
		}
	}
	
	public void ClickMyProduct()
	{
		try {
			Wait.waitForAnElementToBeVisible(this.driver, accountmyproduct, 60);
			Click.JavaClick(this.driver, accountmyproduct);
		} catch (Throwable error) {
			Assert.fail("ClickMyProduct Failed, Please investigate");
		}
	}
	
	public void ClickMyOffers()
	{
		try {
			Wait.waitForAnElementToBeVisible(this.driver, accountmyoffers, 60);
			Click.JavaClick(this.driver, accountmyoffers);
		} catch (Throwable error) {
			Assert.fail("ClickMyOffers Failed, Please investigate");
		}
	}
	
	public void ClickMyorders()
	{
		try {
			Wait.waitForAnElementToBeVisible(this.driver, accountmyorders, 60);
			Click.JavaClick(this.driver, accountmyorders);
		} catch (Throwable error) {
			Assert.fail("ClickMyorders Failed, Please investigate");
		}
	}
	
	public void ClickMyReturns()
	{
		try {
			Wait.waitForAnElementToBeVisible(this.driver, accountmyreturns, 60);
			Click.JavaClick(this.driver, accountmyreturns);
		} catch (Throwable error) {
			Assert.fail("ClickMyReturns Failed, Please investigate");
		}
	}
	
	public void ClickMyInformation()
	{
		try {
			Wait.waitForAnElementToBeVisible(this.driver, accountmyinformation, 60);
			Click.JavaClick(this.driver, accountmyinformation);
		} catch (Throwable error) {
			Assert.fail("ClickMyInformation Failed, Please investigate");
		}
	}
	
	public void ValidateMyregisterButton() {
		try {
			Wait.waitForAnElementToBeVisible(this.driver, myregisteredproducts, 60);
			ElementsValidation.findElement(this.driver, myregisteredproducts);
		} catch (Throwable error) {
			Assert.fail("ValidateMyregisterButton Failed, Please investigate");
		}
	}
	
	public void ClickRegisterButton() {
		try {
			Wait.waitForAnElementToBeVisible(this.driver, clickregisterbutton, 60);
			Click.JavaClick(this.driver, clickregisterbutton);
		} catch (Throwable error) {
			Assert.fail("ClickRegisterButton Failed, Please investigate");
		}
	}
	
	public void ValidateSerialButon() {
		try {
			Wait.waitForAnElementToBeVisible(this.driver, checkserialbutton, 60);
			ElementsValidation.findElement(this.driver, checkserialbutton);
		} catch (Throwable error) {
			Assert.fail("ValidateSerialButon Failed, Please investigate");
		}
	}
	
	public void ClickPrivatePolicy() {
		try {
			Wait.waitForAnElementToBeVisible(this.driver, privacypolicy, 60);
			Click.JavaClick(this.driver, privacypolicy);
		} catch (Throwable error) {
			Assert.fail("ClickPrivatePolicy Failed, Please investigate");
		}
	}
	
	public void ClicTermsOfuse() {
		try {
			Wait.waitForAnElementToBeVisible(this.driver, termsofuse, 60);
			Click.JavaClick(this.driver, termsofuse);
		} catch (Throwable error) {
			Assert.fail("ClicTermsOfuse Failed, Please investigate");
		}
	}
	
	public void ClickForgotPassword() {
		try {
			Wait.waitForAnElementToBeVisible(this.driver, forgotyourpassword, 60);
			Click.JavaClick(this.driver, forgotyourpassword);
		} catch (Throwable error) {
			Assert.fail("ClickForgotPassword Failed, Please investigate");
		}
	}
	
	public void ValidatePrivacyPolicyPage() throws InterruptedException	{
		ElementsValidation.findElement(this.driver, policytitle);
	}
	
	public void ValidateTermOfusePage() throws InterruptedException {
		ElementsValidation.findElement(this.driver, termstitle);
	}

	public void ValidateForgotPage() {
		try {
			Wait.waitForAnElementToBeVisible(this.driver, forgottitle, 60);
			ElementsValidation.findElement(this.driver, forgottitle);
		} catch (Throwable error) {
			Assert.fail("ValidateForgotPage Failed, Please investigate");
		}
	}
	
	public void validateSignInContentExists() {
		try {
			Wait.waitForAnElementToBeVisible(this.driver, signin, 60);
			ElementsValidation.findElement(this.driver, signin);
		} catch (Throwable error) {
			Assert.fail("validateSignInContentExists Failed, Please investigate");
		}
	}
	
	public void EnterValidemail(String Email) throws InterruptedException {
		Wait.waitAwhile(1);
		SendText.SendKeys(this.driver, email, Email);
	}
	
	public void EnterValidPassword(String Password) throws InterruptedException {
		Wait.waitAwhile(1);
		SendText.SendKeysJava(this.driver, password, Password);
	}
	
	public void ClickSignIn() throws InterruptedException {
		Click.ElementClick(this.driver, signin);
		Wait.waitAwhile(2);
	}
	
	public void ValidateErrorMessage() {
		Assert.assertFalse(ElementsValidation.isElementPresent(this.driver, myaccounttitle));
	}
	
	public void ValidateLoggedIn() {
		try {
			Wait.waitAwhile(2);
			Wait.waitForAnElementToBeVisible(this.driver, myaccounttitle, 60);
			ElementsValidation.findElement(this.driver, myaccounttitle);
		} catch (Throwable error) {
			Assert.fail("ValidateLoggedIn Failed, Please investigate");
		}
	}
}
