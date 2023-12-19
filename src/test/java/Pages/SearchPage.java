package Pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import Helpers.Click;
import Helpers.Wait;

public class SearchPage {

	WebDriver driver = null;
	
	By searchfield = By.xpath("//div[@id='search-content']//div//form//div//input");
	By searchpagevalidation = By.xpath("//h1//span");
	By clicksearch = By.xpath("//div[@id='search-content']//div//form//div[1]//div//button");
	
	public SearchPage(WebDriver driver) {
		
		this.driver = driver;
	}
	
	public void enterSearchField(String text) {
		
		try {
			WebElement elem = this.driver.findElement(searchfield);
			elem.sendKeys(text);
			Click.JavaClick(this.driver, clicksearch);
		} catch (Throwable error) {
			Assert.fail("enterSearchField Failed, Please investigate");
		}
	}
	
	public void ValidateIfUserIsInTheSearchedPage(String text)
	{
		try {
			String element = this.driver.findElement(searchpagevalidation).getText();
			Wait.waitAwhile(3);
			Assert.assertTrue(element.contains(text));
		} catch (Throwable error) {
			Assert.fail("ValidateIfUserIsInTheSearchedPage Failed, Please investigate");
		}
	}
}
