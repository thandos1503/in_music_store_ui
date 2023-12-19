package StepDefinitions;

import org.openqa.selenium.WebDriver;
import Pages.CookiesPage;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CookieSteps {

	WebDriver driver = Hooks.getDriver();
	CookiesPage cookies = new CookiesPage(this.driver);
	
	@Then("I should see the cookie banner")
	public void i_should_see_the_cookie_banner() throws InterruptedException {

		cookies.validateCookieBannerExists();
	}
	
	@When("I click the Allow Cookies Button")
	public void i_click_the_Allow_Cookies_Button() {
		
		cookies.clickAcceptCookie();
	}

	@Then("The Cookie Banner must not appear")
	public void the_Cookie_Banner_must_not_appear() {

		cookies.validateCookieBannerMustNotAppear();
	}	

	@When("I click the close cookie banner button")
	public void i_click_the_close_cookie_banner_button() {
	   
		cookies.clickCloseCookieBanner();
	}
}
