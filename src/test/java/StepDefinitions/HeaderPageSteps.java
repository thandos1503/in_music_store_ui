package StepDefinitions;

import org.openqa.selenium.WebDriver;

import Pages.HeaderPage;
import Pages.HomePage;
import Pages.SignInPage;
import io.cucumber.java.en.Then;

public class HeaderPageSteps {

	WebDriver driver = Hooks.getDriver();
	HomePage homepage = new HomePage(this.driver);
	HeaderPage headerpage = new HeaderPage(this.driver);
	SignInPage signinpage = new SignInPage(this.driver);
		
	
	@Then("The header includes the logo, account and help icons")
	public void the_header_includes_the_logo_account_and_help_icons() {

		headerpage.validateHeaderContentExists();
	}

	@Then("All content loads on page")
	public void all_content_loads_on_page() {

		homepage.validateAllContentExists();	
	}

	@Then("I click the account button")
	public void when_i_click_the_account_button() {

		headerpage.clickAccount();
		
	}

	@Then("The account icon links to the account login page")
	public void the_account_icon_links_to_the_account_login_page() {

		signinpage.validateSignInContentExists();
	}

	@Then("I click the logo to go the home page")
	public void i_click_the_logo_to_go_the_home_page() {

		headerpage.clickLogo();
	}

	@Then("All links are properly linked to appropriate pages")
	public void all_links_are_properly_linked_to_appropriate_pages() {

		
	}

	
	
	
	
}
