package StepDefinitions;

import org.openqa.selenium.WebDriver;

import Pages.RegistrationPage;
import io.cucumber.java.en.Then;

public class RegistrationSteps {

	WebDriver driver = Hooks.getDriver();
	RegistrationPage registrationpage = new RegistrationPage(this.driver);
	
	
	@Then("I click create account button")
	public void i_click_create_account_button() {
	    
		registrationpage.clickCreateAccount();
	}
	
	@Then("Enter {string} And {string} And {string} And {string} And {string}")
	public void enter_And_And_And_And(String string, String string2, String string3, String string4, String string5) {
		
		registrationpage.FillRegistrationText(string, string2, string3, string4, string5);
	}
	
	@Then("Enter country USA")
	public void enter_country_USA() {
	    
		registrationpage.SelectCountry();
	}

	@Then("I click the Next Step")
	public void i_click_the_Next_Step() {
	     
		registrationpage.ClickNext();
	}
	
	@Then("I click the brand")
	public void i_click_the_brand() {

		registrationpage.ClickBrand();
	}

	@Then("I click the Agree policy")
	public void i_click_the_Agree_policy() {

		registrationpage.ClickAgreePolicy();
	}

	@Then("I confirm creating account")
	public void i_confirm_creating_account() {

		registrationpage.ClickNewCreateAccount();
	}

	@Then("I should see the confirm page")
	public void i_should_see_the_confirm_page() {

		registrationpage.ValidateConfirmPage();
	}
	
	
}
