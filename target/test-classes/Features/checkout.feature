#Author
 #Date
 #Description
 @SmokeScenario @Checkout @Critical @gitlab
 Feature: Checkout 
 
 Background: Launch website 

	Given I navigate to url
	Then I should see the cookie banner
	When I click the Allow Cookies Button
	Then The Cookie Banner must not appear
	And I click the menu
	And I click the top seller menu
	And When i click on a product that is more the $1000
	And I add item to cart 
 
 @SmokeTest
 Scenario: As a user, I want to validate i can checkout as a guest 
 And I click the cart to checkout
 And I checkout item
 Then I should be in the shipping page
 
 @SmokeTest
 Scenario Outline: As a user, I want to validate i can checkout as a logged in user
 And I click the account button
 Then The account icon links to the account login page
 And I enter correct "<email>" address
 And I enter valid "<password>"
 And I click the sign in button 
 And I click the cart to checkout
 And I checkout item
 Then I should be in the shipping page
 And Enter Shipping Details "<email>" and "<password>"
 Then Confirm Affirm is available
 Then Confirm Amazon Pay is Available
  
 
  Examples:
 |email|password|
 |ahungana@gmail.com|Abc123##|
 #|thandos1503@gmail.com|Abc123##|