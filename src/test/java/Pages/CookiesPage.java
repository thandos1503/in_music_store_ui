package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import Helpers.Click;
import Helpers.ElementsValidation;

public class CookiesPage {

	protected WebDriver driver = null;
	protected String projectPath = System.getProperty("user.dir");
	
	public CookiesPage(WebDriver driver) {
		
		this.driver = driver;
	}
	
	private By CookieBar = By.xpath("//span[contains(text(),'We use cookies to make your experience better.')]");
	private By AllowCookie = By.xpath("//button[@class='btn btn-primary']");
	private By CloseCookieBanner = By.xpath("//button[@aria-label='Close panel'][1]");
	
		
	public void validateCookieBannerExists() {
		
		ElementsValidation.findElement(this.driver, CookieBar);
	}
	
	public void clickAcceptCookie() {
		
		Click.ElementClick(driver, AllowCookie);
	}
	
	public void validateCookieBannerMustNotAppear() {
		
		ElementsValidation.ElementsDoesNotExists(this.driver, CookieBar);
	}
	
	public void clickCloseCookieBanner() {
		Click.ElementClick(driver, CloseCookieBanner);
	}
}
