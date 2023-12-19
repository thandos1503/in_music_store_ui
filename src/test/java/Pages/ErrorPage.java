package Pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ErrorPage {

	WebDriver driver = null;
	
	private By error = By.xpath("//*[@id='maincontent']//following::div[3]//h3");
	
	public ErrorPage(WebDriver driver) {
		
		this.driver = driver;
	}
	
	public void UpdateUrl() {
		
		String Url = this.driver.getCurrentUrl();
		Url = Url + "error";
		this.driver.navigate().to(Url);
	}
	
	public void ValidateErrorPage() {
		
		String text = this.driver.findElement(error).getText();
		Assert.assertEquals(text,"Sorry, the page you are looking for cannot be found");
		
		text = this.driver.getTitle();
		Assert.assertEquals(text,"404 inMusic Store");
		
	}
}
