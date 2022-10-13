package StepDefinitions;

import org.openqa.selenium.WebDriver;

import Pages.HeaderPage;
import Pages.HomePage;
import Pages.SignInPage;
import io.cucumber.java.en.Then;

public class SignInPageSteps {

	WebDriver driver = Hooks.getDriver();
	SignInPage signinpage = new SignInPage(this.driver);
		
	
	@Then("I enter valid password")
	public void i_enter_valid_password() {
	    
		signinpage.EnterValidPassword();
	}

	@Then("i have successfully logged in")
	public void i_have_successfully_logged_in() {

		signinpage.ValidateLoggedIn();
	}

	@Then("I enter correct email address")
	public void i_enter_correct_email_address() {

		signinpage.EnterValidemail();
	}

	@Then("I enter invalid password")
	public void i_enter_invalid_password() {
	    
		signinpage.EnterInValidPassword();
	}

	@Then("I see an error message")
	public void i_see_an_error_message() {
		
		signinpage.ValidateErrorMessage();
	}
	
	@Then("I click the sign in button")
	public void i_click_the_sign_in_button() {
	    
		signinpage.ClickSignIn();
	}
	
	@Then("I click the Privacy Policy")
	public void i_click_the_Privacy_Policy() {
	
		signinpage.ClickPrivatePolicy();
	}
	
	@Then("I am in the privacy page")
	public void I_am_in_the_privacy_page() {

		signinpage.ValidatePrivacyPolicyPage();
	}
	
	@Then("I click the terms of use")
	public void i_click_the_terms_of_use() {

		signinpage.ClicTermsOfuse();
	}

	@Then("I am in the terms of use page")
	public void i_am_in_the_terms_of_use_page() {

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




	
}
