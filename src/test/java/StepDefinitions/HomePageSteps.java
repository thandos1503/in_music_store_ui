package StepDefinitions;

import org.openqa.selenium.WebDriver;

import Pages.HomePage;
import io.cucumber.java.en.Then;

public class HomePageSteps {

	WebDriver driver = Hooks.getDriver();
	HomePage homepage = new HomePage(this.driver);
	
	@Then("When i click on a product")
	public void when_i_click_on_a_product() throws InterruptedException {
	    
		homepage.clickMoreinfoOnProduct();
	}
	
}
