package StepDefinitions;

import org.openqa.selenium.WebDriver;

import Pages.NavigationPage;
import Pages.SignInPage;
import io.cucumber.java.en.Then;

public class SignInPageSteps {

	WebDriver driver = Hooks.getDriver();
	SignInPage signinpage = new SignInPage(this.driver);
	NavigationPage navigationpage = new NavigationPage(this.driver);
	
	@Then("I enter valid {string}")
	public void i_enter_valid_password(String password) throws InterruptedException {
	    
		signinpage.EnterValidPassword(password);
	}

	@Then("i have successfully logged in")
	public void i_have_successfully_logged_in() {

		signinpage.ValidateLoggedIn();
	}

	@Then("I enter correct {string} address")
	public void i_enter_correct_email_address(String email) throws InterruptedException {

		signinpage.EnterValidemail(email);
	}

	@Then("I enter invalid {string}")
	public void i_enter_invalid_password(String password) {
	    
		//signinpage.EnterInValidPassword(password);
	}

	@Then("I see an error message")
	public void i_see_an_error_message() {
		
		signinpage.ValidateErrorMessage();
	}
	
	@Then("I click the sign in button")
	public void i_click_the_sign_in_button() throws InterruptedException {
	    
		signinpage.ClickSignIn();
		navigationpage.refreshHomePage();
		
	}
	
	@Then("I click the Privacy Policy")
	public void i_click_the_Privacy_Policy() {
	
		signinpage.ClickPrivatePolicy();
	}
	
	@Then("I am in the privacy page")
	public void I_am_in_the_privacy_page() throws InterruptedException {

		signinpage.ValidatePrivacyPolicyPage();
	}
	
	@Then("I click the terms of use")
	public void i_click_the_terms_of_use() {

		signinpage.ClicTermsOfuse();
	}

	@Then("I am in the terms of use page")
	public void i_am_in_the_terms_of_use_page() throws InterruptedException {

		signinpage.ValidateTermOfusePage();
	}

	@Then("I click the forgot")
	public void i_click_the_forgot() {
	    
		signinpage.ClickForgotPassword();
	}

	@Then("I am in the forgot page")
	public void i_am_in_the_forgot_page() {
	    
		signinpage.ValidateForgotPage();
	}

	@Then("I can see the My Registered product panel")
	public void i_can_see_the_My_Registered_product_panel() {
	    
		signinpage.ValidateMyregisterButton();
	}

	@Then("I click the register new product button")
	public void i_click_the_register_new_product_button() {

		signinpage.ClickRegisterButton();
	}

	@Then("I should be on the Product registration page")
	public void i_should_be_on_the_Product_registration_page() {
		signinpage.ValidateSerialButon();
	}

	@Then("I Click My account")
	public void i_Click_My_account() {
	    signinpage.ClickMyAccount();
	}

	@Then("I Must be in My account page")
	public void i_Must_be_in_My_account_page() {
		signinpage.ValidateAccounts();
	}

	@Then("I Click My product")
	public void i_Click_My_product() {
		signinpage.ClickMyProduct();;
	}

	@Then("I Must be in my product page")
	public void i_Must_be_in_my_product_page() {
		signinpage.ValidateProducts();;
	}

	@Then("I Click My offers")
	public void i_Click_My_offers() {
		signinpage.ClickMyOffers();;
	}

	@Then("I Must be in My offers page")
	public void i_Must_be_in_My_offers_page() {
		signinpage.ValidateOffers();
   	}

	@Then("I Click My returns")
	public void i_Click_My_returns() {
		signinpage.ClickMyReturns();
	}

	@Then("I Must be in My returns page")
	public void i_Must_be_in_My_returns_page() {
		signinpage.ValidateReturns();
	}

	@Then("I Click My information")
	public void i_Click_My_information() {
		signinpage.ClickMyInformation();;
	}

	@Then("I Must be in My information page")
	public void i_Must_be_in_My_information_page() {
		signinpage.ValidateInformation();
	}
	

	@Then("I enter YOB of {string}")
	public void i_enter_YOB_of(String text) {

		signinpage.EnterYOB(text);
	}
	
	@Then("I Click Save")
	public void i_Click_Save() {

		signinpage.ClickSave();
	}
	
	@Then("I Must see and error message pop up")
	public void i_Must_see_and_error_message_pop_up() {

		signinpage.ValidateErrorMsgOnYOB();
	}
		
	
	@Then("I enter new firstname")
	public void i_enter_new_firstname() {

		signinpage.UpdateFirstName();
	}

	@Then("I Must Update User info PopUp")
	public void i_Must_Update_User_info_PopUp() {
	      
		signinpage.UpdatedPopUpAppears();
	}
	
	@Then("I click new interest")
	public void i_click_new_interest() {
	    
		signinpage.UpdateInterest();
	}
	
	@Then("I click and see all your product registrations")
	public void i_click_and_see_all_your_product_registrations() {
	     
		signinpage.ClickRegisteredProducts();
	}

	@Then("I should be in the registered products page")
	public void i_should_be_in_the_registered_products_page() {

		signinpage.ValidateRegisteredProducts();
	}
	@Then("I should see the orders Button")
	public void i_should_see_the_orders_Button() {

		signinpage.ValidateOdersOverview();
		
	}

	@Then("I click the order Button")
	public void i_click_the_order_Button() {

		signinpage.ClickOrdersOverview();
	}

	@Then("I should see my orders")
	public void i_should_see_my_orders() {

		signinpage.ValidateMyOrdersOverview();
	}
	
	@Then("I subscribe to a brand")
	public void i_subscribe_to_a_brand() {

		signinpage.ClickSubscribe();
	}

	@Then("I must see the successfully sibcribed message")
	public void i_must_see_the_successfully_sibcribed_message() {
	    
		signinpage.ValidateSubscribed();
	}

	@Then("I unsubscribe to a brand")
	public void i_unsubscribe_to_a_brand() {
		signinpage.ClickUnsubscribe();
	}

	@Then("I Should successfully unsusbscribed")
	public void i_Should_successfully_unsusbscribed() {
		signinpage.ValidateUnSubscribed();
	}

}
