package Pages;

import static org.assertj.core.api.Assertions.*;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import Helpers.Click;
import Helpers.ElementsValidation;
import Helpers.Scroll;
import Helpers.Wait;



public class HeaderPage {

	WebDriver driver = null;
	
	private By cart = By.xpath("//div[@title='Cart']");
	private By carthidden = By.xpath("//section[@id='cart-drawer']//div//div[@style='display: none;' and @aria-label='Close panel']");
	private By logo = By.xpath("//header//a//img[1]");
	private By account = By.xpath("//nav//div[@id='customer-icon']//following::div//a[1]");
	//private By helpLogo = By.xpath("//header/nav/div/div[3]/div/a[1]");
	//private By wishlist = By.xpath("//header//div[@class='header-item flex-1 flex items-center justify-end']//a[2]");
	private By search = By.xpath("//div[@id='search-content']//form//input"); 
	private By menu = By.xpath("//div[@name='menu']//following::button[1]");
	private By shopbycategory = By.xpath("//*[@id='navigation-menu']/nav/div[1]/div[1]/a/h4/span");
	private By topsellerscategory = By.xpath("//a[@title='Top Sellers']//h4");
	private By menuwishlist = By.xpath("//*[@id='customer-icon']/div/div/ul/div[2]/div[2]/a");
	private By clickloggedin = By.xpath("//div[@id='customer-icon']");
	private By loggedincart = By.xpath("//div/div[2]/div[2]/div[1]/div/div/div/p[1]/span[2]");
	private By deletecartitem = By.xpath("//div/div[3]/div[3]/a[2]");
	
	
	public HeaderPage(WebDriver driver) {
		
		this.driver = driver;
	}
	
	public void validateCartExists() {
		
		ElementsValidation.findElement(this.driver, cart);
	}

	public void validateCartMustNotAppear() {
		
		assertThat(Click.ElementIsClickable(this.driver, cart, 60)).isTrue();
	}
	
	public void validateHeaderContentExists() {
		
		try {
			//ElementsValidation.findElement(this.driver, helpLogo);
			ElementsValidation.findElement(this.driver, logo);
			ElementsValidation.findElement(this.driver, account);
			//ElementsValidation.findElement(this.driver, wishlist);
			ElementsValidation.findElement(this.driver, search);
			ElementsValidation.findElement(this.driver, menu);
		} catch (Throwable error) {
			Assert.fail("validateHeaderContentExists failed, Please investigate");
		}
	}
	
	public void clickAccount() {
		
		Click.ElementClick(this.driver, account);
	}
	
	public void clickLogo() {
		try {
			Click.ElementClick(this.driver, logo);
		} catch (Throwable error) {
			Assert.fail("clickLogo failed, Please investigate");
		}
		
	}
	
	public void clickMenu() {
		try {
			Click.JavaClick(this.driver, menu);
		} catch (Throwable e) {
			Assert.fail("clickMenu failed, Please investigate");
		}
		
	}
	
	public void clickShopByCategory() {
		
		try {
			Click.ElementClick(this.driver, shopbycategory);
		} catch (Throwable error) {
			Assert.fail("clickShopByCategoryy failed, Please investigate");
		}
		
	}
	
	public void clickAccountWishlist() {
		
		try {
			Scroll.ScrollToElement(this.driver, menuwishlist);
			Click.ElementClick(this.driver, menuwishlist);
		} catch (Throwable error) {
			Assert.fail("clickTopSellersByCategory failed, Please investigate");
		}
	}
	
	public void clickLoggedInAccount() {
		
		try {
			Scroll.ScrollToElement(this.driver, clickloggedin);
			Click.ElementClick(this.driver, clickloggedin);
		} catch (Throwable error) {
			Assert.fail("clickLoggedInAccount failed, Please investigate");
		}
	}
	
	public void clickAddToCartInMenu() {
		
		try {
			Scroll.ScrollToElement(this.driver, cart);
			Click.ElementClick(this.driver, cart);
		} catch (Throwable error) {
			Assert.fail("clickAddToCartInMenu failed, Please investigate");
		}
		
	}
	
	public void clickLoggedInCartButton() {
		
		try {
			Scroll.ScrollToElement(this.driver, loggedincart);
			Click.ElementClick(this.driver, loggedincart);
		} catch (Throwable error) {
			Assert.fail("clickLoggedInCartButton failed, Please investigate");
		}
	}
	
	public void clickDeleteCartItem() {
		
		try {
			Scroll.ScrollToElement(this.driver, deletecartitem);
			Click.ElementClick(this.driver, deletecartitem);
		} catch (Throwable error) {
			Assert.fail("clickDeleteCartItem failed, Please investigate");
		}
	}
	
	public void clickTopSellersByCategory() {
		try {
			Click.ElementClick(this.driver, topsellerscategory);
		} catch (Throwable e) {
			Assert.fail("clickTopSellersByCategory failed, Please investigate");
		}
		
	}

}
