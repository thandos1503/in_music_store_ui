package Pages;

import org.junit.Assert;
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
	
	private By CookieBar = By.xpath("//div[@id='truste-consent-track']");
	private By AllowCookie = By.xpath("//button[@id='truste-consent-button' and text()='Accept']");
	private By CloseCookieBanner = By.xpath("//button[@id='truste-consent-required' and text()='Decline All']");
			
	public void validateCookieBannerExists() {
		try {
			ElementsValidation.findElement(this.driver, CookieBar);
		} catch (Throwable e) {
			Assert.fail("ValidateCookieBanner failed, Please investigate");
		}
	}
	
	public void clickAcceptCookie() {
		try {
			Click.ElementClick(driver, AllowCookie);
		} catch (Throwable e) {
			Assert.fail("clickAcceptCookie failed, Please investigate");
		}
	}
	
	public void validateCookieBannerMustNotAppear() {
		try {
			ElementsValidation.ElementsDoesNotExists(this.driver, CookieBar);
		} catch (Throwable e) {
			Assert.fail("validateCookieBannerMustNotAppear failed, Please investigate");
		}
	}
	
	public void clickCloseCookieBanner() {
		try {
			Click.ElementClick(driver, CloseCookieBanner);
		} catch (Throwable e) {
			Assert.fail("clickCloseCookieBanner failed, Please investigate");
		}
	}
}
