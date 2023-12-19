package StepDefinitions;

import org.openqa.selenium.WebDriver;

import Pages.FooterPage;
import io.cucumber.java.en.Then;

public class FooterPageSteps {

	WebDriver driver = Hooks.getDriver();
	FooterPage footerpage = new FooterPage(this.driver);

	@Then("I scroll to footer")
	public void i_scroll_to_footer() {
	    
		footerpage.scrollToFooter();
	}
	
	@Then("I click the privacy page")
	public void i_click_the_privacy_page() {
	
		footerpage.clickPrivacyPage();
	}
	
	@Then("I click the Terms page")
	public void i_click_the_Terms_page() {
	    
		footerpage.clickTermsPage();
	}
	
	@Then("I can see the {string} payment")
	public void secure_payments(String item) {
	    
		footerpage.ValidateSecurePayments(item);
	}
		
	@Then("I validate the {string} Links work")
	public void i_Then_i_validate_the_Links_works(String page) {
	    
		footerpage.validatePageLinks(page);
	}
	
	@Then("I click on the {string} page")
	public void i_click_on_the_page(String page) {
		
		footerpage.clickpage(page);
	}
	
}
