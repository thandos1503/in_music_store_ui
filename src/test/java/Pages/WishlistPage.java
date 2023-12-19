package Pages;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import Helpers.Click;
import Helpers.ElementsValidation;
import Helpers.Scroll;
import Helpers.SendText;
import Helpers.Wait;

public class WishlistPage {

	WebDriver driver = null;
	
	public WishlistPage(WebDriver driver) {
		
		this.driver = driver;
	}
	
	private By wishlistitem = By.xpath("//section/div[2]/div/div[2]/div[1]/a/button");
	private By selectedwishitems = By.xpath("//li[@data-row='product-item'][1]");
	private By commenttext = By.xpath("//textarea");
	private By deleteitem = By.xpath("//div/div[2]/div[3]/a[2]");
	private By addtocart = By.xpath("//span[text()='Add to Cart']");
	private By itemaddedtocart = By.xpath("//*[@id='cart-drawer']/div/div[2]/div[2]/div[1]/div/div/div/p[1]");
	private By shareitem = By.xpath("//*[@id='wishlist-view-form']/div[2]/div/button[2]");
	private By emailarea = By.xpath("//*[@id='email_address']");
	private By sendtextforemail = By.xpath("//*[@id='message']");
	private By sharetosendemail = By.xpath("//*[@id='form-validate']/div/div[1]/button");
	private By emailsent = By.xpath("//span[text()='Your wish list has been shared.']");
	private By editproduct = By.xpath("//a[@class='action edit btn btn-secondary inline-flex mr-2 p-2']");
	
	public void clickWishListItem() {
		
		Click.ElementClick(this.driver, wishlistitem);
	}
	
	public void validateWishListItems() {
		
		ElementsValidation.findElement(this.driver, selectedwishitems);
	}
	
	public void validateTextSend() throws Exception {
		
		Scroll.ScrollToElement(this.driver, commenttext);
		SendText.SendKeysJava(this.driver, commenttext, "This is teting if text is Added");
	}
	
	public void clickDeleteWishlistItem() {
		
		Scroll.ScrollToElement(this.driver, deleteitem);
		Click.ElementClick(this.driver, deleteitem);
		try {
			Wait.waitAwhile(10);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void validateWishlistItemDoesNotExists() throws InterruptedException {
		
		Wait.waitAwhile(15);
		ElementsValidation.ElementsDoesNotExists(this.driver, deleteitem);
	}
	
	public void clickAddToCart() {
		
		Scroll.ScrollToElement(this.driver, addtocart);
		Click.ElementClick(this.driver, addtocart);
	}
	
	public void validateItemAddedToCart() {
		
		ElementsValidation.findElement(this.driver, itemaddedtocart);
	}
	
	public void clickWishListItemFromWishListPage() {
		
		Scroll.ScrollToElement(this.driver, shareitem);
		Click.ElementClick(this.driver, shareitem);
	}
	
	public void EnterEmailForToShare() {
		
		SendText.SendKeys(this.driver, emailarea, "thandos1503@gmail.com");
	}
	
	public void TextToBeSentWithEmail() {
		
		SendText.SendKeys(this.driver, sendtextforemail, "This is a test message");
	}
	
	public void clickShareToSendEmail() {
				
		Scroll.ScrollToElement(this.driver, sharetosendemail);
		Click.ElementClick(this.driver, sharetosendemail);
	}
	
	public void ValidateEmailWasSentSuccessfully( ) {
		
		ElementsValidation.findElement(this.driver, emailsent);
	}
	
	public void RemoveItemFfromList() {
		
		Scroll.ScrollToElement(this.driver, deleteitem);
		Click.ElementClick(this.driver, deleteitem);
	}
	
	public void clickEditProduct() {
		
		Scroll.ScrollToElement(this.driver, editproduct);
		Click.ElementClick(this.driver, editproduct);
	}
	
}
