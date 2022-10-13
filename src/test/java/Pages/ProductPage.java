package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import static org.assertj.core.api.Assertions.*;

import Helpers.ElementsValidation;
import Helpers.Scroll;

public class ProductPage {

	WebDriver driver = null;
	
	private By quantity = By.id("#product_addtocart_form");
	private By price = By.xpath("//span[@class='price']");
	private By dealer = By.xpath("//span[text()='Find a Dealer']");
	private By klarna = By.xpath("//div[@class='ecom-item']//klarna-placement");
	
	public ProductPage(WebDriver driver) {
		
		this.driver = driver;
	}
	
	public void validateQuantityDoesNotAppear() {
		
		assertThat(ElementsValidation.isElementPresent(this.driver, quantity)).isFalse();
	}
	
	public void validateDealerExists() throws InterruptedException {
		
		
		assertThat(Scroll.ScrollToElement(this.driver, dealer)).isTrue();
		assertThat(ElementsValidation.isElementPresent(this.driver, dealer)).isTrue();
	}
	
	public void validatePriceDoesNotAppear() {
		
		assertThat(Scroll.ScrollToElement(this.driver, price)).isFalse();
	}
	
public void validateKlarnaDoesNotAppear() {
		
		assertThat(Scroll.ScrollToElement(this.driver, klarna)).isFalse();
	}
}
