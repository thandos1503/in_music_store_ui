package StepDefinitions;

import org.openqa.selenium.WebDriver;

import Pages.NavigationPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class NavigationSteps {

	WebDriver driver = Hooks.getDriver();
	NavigationPage navigate = new NavigationPage(this.driver);
	
	@Given("I navigate to url")
	public void i_navigate_to_url() throws Exception {
			
		navigate.navigateToHomePage();
	}
	
	@And("I set CountryCode to US")
	public void i_CountryCode_to_US() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
	    navigate.setCookie();
	}
	
		@And("I Reload the page")
	public void i_Reload_the_page() {
	
		navigate.refreshHomePage();
	}
	
	
}
