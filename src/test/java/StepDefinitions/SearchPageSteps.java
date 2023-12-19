package StepDefinitions;

import org.openqa.selenium.WebDriver;

import Pages.SearchPage;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class SearchPageSteps {

	WebDriver driver = Hooks.getDriver();
	SearchPage searchpage = new SearchPage(this.driver);
	
	@When("The item to be {string}")
	public void and_the_item_to_be_searched(String searched) {

		searchpage.enterSearchField(searched);
	}

	@Then("I validate if i am redirected to the {string} item")
	public void i_validate_if_i_am_redirected_to_the_searched_item(String searched) {

		searchpage.ValidateIfUserIsInTheSearchedPage(searched);
	}
}
