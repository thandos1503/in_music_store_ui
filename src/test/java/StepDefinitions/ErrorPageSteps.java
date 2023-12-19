package StepDefinitions;

import org.openqa.selenium.WebDriver;

import Pages.ErrorPage;
import io.cucumber.java.en.Then;

public class ErrorPageSteps {

	WebDriver driver = Hooks.getDriver();
	ErrorPage errorpage = new ErrorPage(this.driver);
	
	@Then("I update page url")
	public void i_update_page_url() {
	    
		errorpage.UpdateUrl();
	}

	@Then("I validate if in am in the {int} page")
	public void i_validate_if_in_am_in_the_page(Integer int1) {
	    
		errorpage.ValidateErrorPage();
	}
	
}
