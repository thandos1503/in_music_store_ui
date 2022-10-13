package StepDefinitions;

import org.openqa.selenium.WebDriver;

import Helpers.Wait;
import Pages.ProductPage;
import io.cucumber.java.en.Then;

public class ProductPageSteps {

	WebDriver driver = Hooks.getDriver();
	ProductPage productpage = new ProductPage(this.driver);
	
	@Then("There is no quantity on PDP")
	public void there_is_no_quantity_on_PDP() throws Throwable {
	    
		productpage.validateQuantityDoesNotAppear();
	}

	@Then("Find a Dealer is on every PDP")
	public void find_a_Dealer_is_on_every_PDP() throws InterruptedException {
	    
		productpage.validateDealerExists();
	}

	@Then("Price is not listed")
	public void price_is_not_listed() {
	    
		productpage.validatePriceDoesNotAppear();
	}

	@Then("Klarna info is not on PDP")
	public void klarna_info_is_not_on_PDP() {
	    
		productpage.validateKlarnaDoesNotAppear();
	}
	
}
