package StepDefinitions;

import org.openqa.selenium.WebDriver;

import Pages.WishlistPage;
import io.cucumber.java.en.Then;

public class WshlistSteps {

	WebDriver driver = Hooks.getDriver();
	WishlistPage wishlistpage = new WishlistPage(this.driver);
	
	
	@Then("I click the wishlist item")
	public void i_click_the_wishlist_item() {
	 
		wishlistpage.clickWishListItem();
	}
	
	@Then("My Wishlist item should be in the list")
	public void my_Wishlist_item_should_be_in_the_list() {
	    
		wishlistpage.validateWishListItems();
	}
	
	@Then("I add a comment")
	public void then_i_add_a_comment() throws Exception {

		wishlistpage.validateTextSend();
	}
	
	@Then("I Delete the wishlist item")
	public void i_Delete_the_wishlist_item() {

		wishlistpage.clickDeleteWishlistItem();
	}

	@Then("My Wishlist Item must not be visible")
	public void my_Wishlist_Item_must_not_be_visible() throws InterruptedException {
	    
		wishlistpage.validateWishlistItemDoesNotExists();
	}
	
	@Then("I click the Add to cart button on the wishlist page")
	public void i_click_the_Addto_cart_button_on_the_wishlist_page() {

		wishlistpage.clickAddToCart();
	}
	
	@Then("I Validate item from wishlist is added to cart")
	public void i_Validate_item_from_wishlist_is_added_to_cart() {

		wishlistpage.validateItemAddedToCart();
	}
	
	@Then("I click the share wish list button")
	public void i_click_the_share_wish_list_button() {

		wishlistpage.clickWishListItemFromWishListPage();
	}
	
	@Then("I add email address to share whish list")
	public void i_add_email_address_to_share_whish_list() {

		wishlistpage.EnterEmailForToShare();
	}
	
	@Then("I add the message for the email")
	public void i_add_the_message_for_the_email() {

		wishlistpage.TextToBeSentWithEmail();
	}
	
	@Then("click share button")
	public void click_share_button() {

		wishlistpage.clickShareToSendEmail();
	}
	
	@Then("The Shared Pop up must appear")
	public void the_Shared_Pop_up_must_appear() {
	    
		wishlistpage.ValidateEmailWasSentSuccessfully();
	}
	
	@Then("I remove the wishlist item")
	public void remove_item_from_list() {
		
		wishlistpage.RemoveItemFfromList();
	}
	
	@Then("I click the edit product")
	public void i_click_the_edit_product() {

		wishlistpage.clickEditProduct();
	}

}

