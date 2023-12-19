package Pages;

import java.util.Properties;

import org.junit.Assert;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.WebDriver;
import StepDefinitions.Hooks;
import Helpers.Wait;

public class NavigationPage {

	WebDriver driver = null;
		
	public NavigationPage(WebDriver driver) {
		
		this.driver = driver;
	}
		
	public void navigateToHomePage() throws Exception {
		
		Properties prop = new Properties();
		prop.load(Hooks.class.getClassLoader().getResourceAsStream("inmusicstore.properties"));
		String url = prop.getProperty("url");
		
		if (url.contains("production"))
		{
			this.driver.navigate().to("https://inmusicstore.com");
		}
		else
		//else if (url.contains("staging"))
		{
			this.driver.navigate().to("https://inmusicstore:webshop@magento.staging.imbtest.com/");
		}
	}
	
	public void refreshHomePage() {
		try {
			Wait.waitAwhile(3);
			this.driver.navigate().refresh();
		} catch (Throwable error) {
			Assert.fail("Refresh page failed, Please investigate");
		}
	}
	
	//needs to be removed
	public void setCookie() throws InterruptedException
	{
        Cookie countrycode = driver.manage().getCookieNamed("countryCode");
		driver.manage().deleteCookie(countrycode);
		driver.manage().addCookie(new Cookie("countryCode", "US"));
	}
}
