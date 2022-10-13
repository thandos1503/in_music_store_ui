package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import Helpers.Click;
import Helpers.ElementsValidation;

public class HeaderPage {

	WebDriver driver = null;
	
	private By cart = By.xpath("//div[@title='Cart']");
	private By logo = By.xpath("//header/nav/div/div[1]/div[3]/a");
	private By account = By.xpath("//header/nav/div/div[3]/div/div/div/a/div");
	private By helpLogo = By.xpath("//header/nav/div/div[3]/div/a[1]");
	private By wishlist = By.xpath("//header//div[@class='header-item flex-1 flex items-center justify-end']//a[2]");
	private By search = By.xpath("//header/nav/div/div[2]/div[2]/div/form/div[1]/input"); 
	private By menu = By.xpath("//header/nav/div/div[1]/div[2]/div/div/div[1]");
	
	public HeaderPage(WebDriver driver) {
		
		this.driver = driver;
	}
	
	public void validateCartExists() {
		
		ElementsValidation.findElement(this.driver, cart);
	}

	public void validateCartMustNotAppear() {
		
		ElementsValidation.ElementsDoesNotExists(this.driver, cart);
	}
	
	public void validateHeaderContentExists() {
		
		//ElementsValidation.findElement(this.driver, helpLogo);
		ElementsValidation.findElement(this.driver, logo);
		ElementsValidation.findElement(this.driver, account);
		//ElementsValidation.findElement(this.driver, wishlist);
		ElementsValidation.findElement(this.driver, search);
		ElementsValidation.findElement(this.driver, menu);
	}
	
	public void clickAccount() {
		
		Click.ElementClick(this.driver, account);
	}
	
	public void clickLogo() {
		
		Click.ElementClick(this.driver, logo);
	}
	
	
	
}
