package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;

import static org.assertj.core.api.Assertions.*;
import static org.junit.Assert.assertTrue;
import Helpers.Click;
import Helpers.ElementsValidation;
import Helpers.Scroll;
import Helpers.SendText;
import Helpers.Wait;

public class ProductPage {

	WebDriver driver = null;
	
	private By quantity = By.id("#product_addtocart_form");
	private By price = By.xpath("//span[@class='price']");
	private By dealer = By.xpath("//span[text()='Find a Dealer']");
	private By klarna = By.xpath("//div[@class='ecom-item']//klarna-placement");
	private By addtocart = By.xpath("//*[@id='pdp-add-to-cart']");
	private By clickcarttoadd = By.xpath("/html/body/div[1]/header/nav/div/div[3]/div/a[2]/div");
	private By checkout = By.xpath("//a[contains(text(),'Proceed to Checkout') or contains(text(),'Checkout')]");
	private By shippingp = By.xpath("//*[@id='shipping']/div[1]");
	private By less1000 = By.xpath("//div/div[2]/section/div[2]/div/div[1]/div[1]/a");
	private By more1000 = By.xpath("//div/div[2]/section/div[2]/div/div[2]/div[1]/a");
	private By description = By.xpath("//li[text()='Description']");
	private By shippinginfo = By.xpath("//li[text()='Shipping info']");
	private By descriptiontext = By.xpath("//*[@id='more-information']/div[1]/div/div[1]/div/div/div[1]//p");
	private By shippinginfotext = By.xpath("//*[@id='more-information']/div[1]/div/div[2]");
	private By technicalinformation = By.xpath("//li[text()='Technical Information']");	
	private By technicalinformationtext = By.xpath("//*[@id='more-information']/div[1]/div/div[3]");
	private By customerreviews = By.xpath("//li[text()='Customer Reviews']");
	private By customerreviewform = By.id("review-form");
		
	//Shipping Details
	private By shipemail = By.id("customer-email");
	private By shippassword= By.id("customer-password");
	private By shiplogin = By.xpath(".action.login.primary");
	
	private By shipcompany = By.xpath("//div[2]/form/div/div[3]/div/input");//DOS
	private By shipaddress1 = By.xpath("//form/div/fieldset/div/div[1]/div/input");//11 Beechwood Cres
	private By shipaddress2 = By.xpath("//form/div/fieldset/div/div[2]/div/input");//Hazeldean
	private By shipcity = By.xpath("//li[1]/div[2]/form/div/div[4]/div/input");//Cape Town
	private By shipstate = By.xpath("//div[5]/ol/li[1]/div[2]/form/div/div[5]/div/select");//Carlifonia
	private By shipzipcode = By.xpath("//li[1]/div[2]/form/div/div[7]/div/input");//90445
	private By shipnumber = By.xpath("//li[1]/div[2]/form/div/div[9]/div/div[1]/input");//2015550123
	private By shipfedex = By.xpath("//table/tbody/tr[2]/td[1]/input");
    private By shipnext = By.xpath("//span[text()='Next']");	
	
	
	public ProductPage(WebDriver driver) {
		
		this.driver = driver;
	}
	
	public void EnterShippingDetails(String username, String password) {
		
		try {
			Wait.waitAwhile(2);
			//SendText.SendKeysJava(this.driver, shipemail, "thandos1503@gmail.com");
			Wait.waitAwhile(2);
			
			SendText.SendKeysJava(this.driver, shipcompany, "DOS");
			SendText.SendKeysJava(this.driver, shipaddress1, "200 sceinic view dir");
			//SendText.SendKeysJava(this.driver, shipaddress2, "Hazeldean");
			SendText.SendKeysJava(this.driver, shipcity, "Cumberland");
			SendText.SendKeysJava(this.driver, shipnumber, "4016583131");
			SendText.SendKeysJava(this.driver, shipzipcode, "02864");
			
			Select se = new Select(this.driver.findElement(shipstate));
			se.selectByIndex(17);
			
			Wait.waitAwhile(2);
			Click.ElementClick(this.driver, shipfedex);
			Wait.waitAwhile(2);
			Click.ElementClick(this.driver, shipnext);
			Wait.waitAwhile(5);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	
	public void clickinfo(String title) {
		
		switch(title){
	     case "Description":
	    	 Scroll.ScrollToElement(this.driver, description);
	     break;

	     case "Shipping":
	    	 try {
	 			Scroll.HoverToElement(this.driver, shippinginfo);
	 			Wait.waitAwhile(2);
	 			
	 			Click.ElementClick(this.driver, shippinginfo);
	 			} catch (InterruptedException e) {
	 			e.printStackTrace();
	 		}
	     break;
	     
	     case "Technical":
	    	 try {
		 			Scroll.HoverToElement(this.driver, technicalinformation);
		 			Wait.waitAwhile(2);
		 			
		 			Click.ElementClick(this.driver, technicalinformation);
		 			} catch (InterruptedException e) {
		 			e.printStackTrace();
		 		}
	    break;
	    
	     case "Reviews":
	    	 try {
		 			Scroll.HoverToElement(this.driver, customerreviews);
		 			Wait.waitAwhile(2);
		 			
		 			Click.ElementClick(this.driver, customerreviews);
		 			} catch (InterruptedException e) {
		 			e.printStackTrace();
		 		}
	    break;
	    	 
	     default:
	     System.out.println("Not in the list");
	     break;
	 }
	}
	
	public void ValidateInfo(String title) {
		
		String text =null;
		switch(title){
	     case "Description":
	    	Scroll.ScrollToElement(this.driver, descriptiontext);
	 		text = this.driver.findElement(descriptiontext).getText();
	 		assertTrue(!text.isEmpty());
	     break;

	     case "Shipping":
		    	 try {
		 			Scroll.ScrollToElement(this.driver, shippinginfotext);
		 			Wait.waitAwhile(2);
		 			text = this.driver.findElement(shippinginfotext).getText();
		 			assertTrue(!text.isEmpty());
		 		} catch (InterruptedException e) {
		 			e.printStackTrace();
	 		}
	     break;
	     
	     case "Technical":
		    	 try {
		 			Scroll.ScrollToElement(this.driver, technicalinformationtext);
		 			Wait.waitAwhile(2);
		 			text = this.driver.findElement(technicalinformationtext).getText();
		 			assertTrue(!text.isEmpty());
		 		} catch (InterruptedException e) {
		 			e.printStackTrace();
	 		}
	    	 break;
	    	 
	     case "Reviews":
	    	 assertThat(ElementsValidation.isElementPresent(this.driver, customerreviewform)).isTrue();
 		 break;
	     
	     default:
	     System.out.println("Not in the list");
	     break;
	 }
	}
		
	public void clickLessThan1000() {
		
		Click.ElementClick(this.driver, less1000);
	}
	
	public void clickMoreThan1000() {
		
		Click.ElementClick(this.driver, more1000);
	}
	
	public void validateKlarnaDoesnotAppears() {
		
		assertThat(ElementsValidation.isElementPresent(this.driver, klarna)).isFalse();
	}
		
	public void validateKlarnaAppears() {
		
		assertThat(ElementsValidation.isElementPresent(this.driver, klarna)).isTrue();
	}
	
	public void clickAddToCart() {
		
		Click.ElementClick(this.driver, addtocart);
	}
	
	public void clickCartToAdd() {
		
		try {
			Wait.waitAwhile(10);
			Scroll.ScrollToElement(this.driver, clickcarttoadd);
			Click.ElementClick(this.driver, clickcarttoadd);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void clickCheckout() {
		try {
			Wait.waitAwhile(10);
			Click.ElementClick(this.driver, checkout);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	public void ValidateInShippingPage() {
		try {
			Wait.waitAwhile(10);
			assertThat(ElementsValidation.isElementPresent(this.driver, shippingp)).isTrue();
			Wait.waitAwhile(1);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void validateQuantityDoesNotAppear() {
		
		assertThat(ElementsValidation.isElementPresent(this.driver, quantity)).isFalse();
	}
	
	public void validateDealerExists() throws InterruptedException {
		
		try {
			assertThat(Scroll.ScrollToElement(this.driver, dealer)).isTrue();
			assertThat(ElementsValidation.isElementPresent(this.driver, dealer)).isTrue();
		     }
		catch(TimeoutException e) {}
	}
	
	public void validatePriceDoesNotAppear() {
		
		assertThat(Scroll.ScrollToElement(this.driver, price)).isTrue();
	}
	
	public void validateKlarnaDoesNotAppear() {
			
			assertThat(Scroll.ScrollToElement(this.driver, klarna)).isTrue();
	}
	
	public void validatePriceDoesAppear() {
		
		assertThat(Scroll.ScrollToElement(this.driver, price)).isTrue();
	}
	
	public void ValidatPriceExists() {
		
		assertThat(ElementsValidation.isElementPresent(this.driver, price)).isTrue();
	}
}
