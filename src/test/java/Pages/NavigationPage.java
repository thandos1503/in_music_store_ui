package Pages;

import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;

import Helpers.Wait;

public class NavigationPage {

	WebDriver driver = null;
		
	public NavigationPage(WebDriver driver) {
		
		this.driver = driver;
	}
		
	public void navigateToHomePage() throws Exception {
		
		this.driver.navigate().to("https://inmusicstore:webshop@magento.staging.imbtest.com/");
		//this.driver.navigate().to("https://inmusicstore.com");
	}
	
	public void refreshHomePage() {

		this.driver.navigate().refresh();
	}
	
	public void setCookie() throws InterruptedException
	{
		Wait.waitAwhile(10);
		Cookie countrycode = driver.manage().getCookieNamed("countryCode");
		driver.manage().deleteCookie(countrycode);
		driver.manage().addCookie(new Cookie("countryCode", "US"));
	}
}
