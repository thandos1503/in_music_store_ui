package StepDefinitions;

import org.openqa.selenium.WebDriver;

import Pages.HeaderPage;
import io.cucumber.java.en.Then;

public class CommerceSteps {
	
	WebDriver driver = Hooks.getDriver();
	HeaderPage headerpage = new HeaderPage(this.driver);
	
	@Then("I should see the shopping cart")
	public void i_should_see_the_shopping_cart() {
		
		headerpage.validateCartExists();
	}
	
	@Then("Cart must not appear")
	public void cart_must_not_appear() {
	    // Write code here that turns the phrase above into concrete actions
	    headerpage.validateCartMustNotAppear();
	}
}
