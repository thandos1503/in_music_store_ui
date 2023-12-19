 #Author
 #Date
 #Description
 #@SmokeScenario 
 @wishlist 
 Feature: Wishlist 
 
 Background: Launch website 

Given I navigate to url 
Then I should see the cookie banner
When I click the close cookie banner button 
And I click the account button
When I click the Allow Cookies Button
Then The account icon links to the account login page
And I enter correct "thandos1503@gmail.com" address
And I enter valid "Abc123##"
And I click the sign in button
 
@SmokeTest @Ignore
Scenario:
As a user, i want to validate if i can add a product to a whishlist
And I click the menu
And I click the Shop by Category menu
And I click the wishlist item
And I click the logged in account button
And I click my wishlist
Then My Wishlist item should be in the list
And I click the menu
And I click the Shop by Category menu
And I click the wishlist item
 
@SmokeTest @Ignore
Scenario:
As a user, i want to validate if i can add a comment to a product in the whishlist
And I click the menu
And I click the Shop by Category menu
And I click the wishlist item
And I click the logged in account button
And I click my wishlist
Then I add a comment
And I click the menu
And I click the Shop by Category menu
And I click the wishlist item

@SmokeTest @Ignore
Scenario:
As a user, i want to validate if i can delete a product in the whishlist page
And I click the menu
And I click the Shop by Category menu
And I click the wishlist item
And I click the logged in account button
Then My Wishlist item should be in the list
And I Delete the wishlist item
Then My Wishlist Item must not be visible

@SmokeTest @Ignore
Scenario:
As a user, i want to validate if i can add items to a cart from the whishlist
And I click the menu
And I click the Shop by Category menu
And I click the wishlist item
And I click the logged in account button
And I click my wishlist
Then I click the Add to cart button on the wishlist page
And I click the Cart button
Then I Validate item from wishlist is added to cart

@SmokeTest @Ignore
Scenario:
As a user, i want to validate if i can share the wishlist using an email
And I click the menu
And I click the Shop by Category menu
And I click the wishlist item
And I click the logged in account button
And I click my wishlist
Then I click the share wish list button
And I add email address to share whish list
And I add the message for the email
And click share button
Then The Shared Pop up must appear
 
@SmokeTest @Ignore
Scenario:
As a user, i want to validate if i can edit a product and be directed to the PDP
And I click the logged in account button
And I click my wishlist
Then I click the edit product
Then Price is listed
  