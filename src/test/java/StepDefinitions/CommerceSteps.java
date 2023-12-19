package StepDefinitions;

import org.openqa.selenium.WebDriver;

import Pages.HeaderPage;
import Pages.ProductPage;

import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CommerceSteps {
	
	WebDriver driver = Hooks.getDriver();
	HeaderPage headerpage = new HeaderPage(this.driver);
	ProductPage productpage = new ProductPage(this.driver);
	
	@Then("I should see the shopping cart")
	public void i_should_see_the_shopping_cart() {
		
		headerpage.validateCartExists();
	}
	
	@Then("Cart must not appear")
	public void cart_must_not_appear() {
	    
	    headerpage.validateCartMustNotAppear();
	}
	
	@Then("I add item to cart")
	public void i_add_item_to_cart() {

		productpage.clickAddToCart();
	}

	@Then("I click the cart to checkout")
	public void i_click_the_cart_to_checkout() {
	    productpage.clickCartToAdd();
	}

	@Then("I checkout item")
	public void i_checkout_item() {

		productpage.clickCheckout();
	}

	@Then("I should be in the shipping page")
	public void i_should_be_in_the_shipping_page() {
	    
		productpage.ValidateInShippingPage();
	}
	
	@When("When i click on a product that is less the $1000")
	public void when_i_click_on_a_product_that_is_less_the_$1000() {

		productpage.clickLessThan1000();
	}

	@Then("Klarna must appear")
	public void klarna_must_appear() {

		productpage.validateKlarnaAppears();
	}
	
	@When("When i click on a product that is more the $1000")
	public void when_i_click_on_a_product_that_is_more_the_$1000() {
	    
		productpage.clickMoreThan1000();
		
	}

	@Then("Klarna must more appear")
	public void klarna_must_more_appear() {
	    
		productpage.validateKlarnaDoesnotAppears();
	}
	
	@When("I click on the {string}")
	public void i_click_on_the(String string) {

		productpage.clickinfo(string);
	}

	@Then("I can see the {string}")
	public void i_can_see_the(String string) {
	     
		productpage.ValidateInfo(string);
	}
	
	@Then("Enter Shipping Details {string} and {string}")
	public void enter_Shipping_Details(String username, String password) {
	
		productpage.EnterShippingDetails(username, password);
	}

	@Then("Confirm Affirm is available")
	public void confirm_Affirm_is_available() {
	
		
	}

	@Then("Confirm Amazon Pay is Available")
	public void confirm_Amazon_Pay_is_Available() {
	    
		
	}
	
}
