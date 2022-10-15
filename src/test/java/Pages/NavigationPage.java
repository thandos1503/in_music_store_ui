package Pages;

import java.awt.List;
import java.util.ArrayList;
import java.util.Collection;

import org.apache.hc.core5.http.message.BasicHeaderElement;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.Proxy;
import org.openqa.selenium.WebDriver;

import com.github.dockerjava.api.model.Device;

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
	
	
	//needs to be removed
	public void setCookie() throws InterruptedException
	{

	     Cookie countrycode = driver.manage().getCookieNamed("countryCode");
		driver.manage().deleteCookie(countrycode);
		driver.manage().addCookie(new Cookie("countryCode", "US"));
	}
}
