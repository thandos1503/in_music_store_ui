package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import Helpers.Click;
import Helpers.ElementsValidation;
import Helpers.Scroll;
import Helpers.Wait;

public class HomePage {

	WebDriver driver = null;
	
	private By Product = By.xpath("//div[@class='block widget block-products-list grid']/following::a[@aria-label='More Info'][1]");
	private By HeroCarousel = By.xpath("//*[@id='maincontent']/div[2]/div/div[1]/div/div[2]/div/div");
	private By trending = By.xpath("//div[@class='pagebuilder-slider glider-contain glider-initialized']");
	private By Main= By.xpath("//*[@id='maincontent']/div[2]/div/div[1]/div/div[5]/div");
	private By CategoryProducts = By.xpath("//div[@class='category-products'][1]");
	
	
	public HomePage(WebDriver driver) {
		
		this.driver = driver;
	}
	
	public void clickMoreinfoOnProduct() throws InterruptedException
	{
		Scroll.ScrollToElement(this.driver, Product);
		Click.ElementClick(this.driver, Product);
	}
	
	public void validateAllContentExists() {
		
		ElementsValidation.findElement(this.driver, Product);
		ElementsValidation.findElement(this.driver, HeroCarousel);
		ElementsValidation.findElement(this.driver, trending);
		ElementsValidation.findElement(this.driver, Main);
		ElementsValidation.findElement(this.driver, CategoryProducts);
	}
	
}
