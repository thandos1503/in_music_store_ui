 #Author = Luthando Sibiya
 #Date
 #Description
 @SmokeScenario @eCommerce @Critical @gitlab
 Feature: Commerce
 
  Background: Launch website 

	Given I navigate to url
	Then I should see the cookie banner
 	When I click the Allow Cookies Button 
 
 @SmokeTest
 Scenario: As a user, i want to validate when Country code is US Cart appear when the user is not Logged in
 Then I should see the shopping cart
 
 @SmokeTest
 Scenario: As a user, i want to Validate if Country Code is Not US, Cart does not appear 
 Then Cart must not appear
 
 @SmokeTest
 Scenario: As a user, i want to validate that Rest RoW user Cannot Purchase Products 
 Then Cart must not appear
 And I click the menu
 And I click the top seller menu
 And When i click on a product
 Then Cart must not appear
 Then There is no quantity on PDP
 Then Price is not listed
 Then Klarna info is not on PDP
 
 @SmokeTest
 Scenario: As a user, i want to validate if i see the karna if i purchase a product that is less than a $1000 
 And I click the menu
 And I click the top seller menu
 And When i click on a product that is less the $1000
 Then Klarna must appear
 
 @SmokeTest
 Scenario: As a user, i want to validate if i don't see the karna if i purchase a product that is more than a $1000 
 And I click the menu
 And I click the top seller menu
 And When i click on a product that is more the $1000
 Then Klarna must more appear 
 
 @SmokeTest
 Scenario Outline: As a user, i want to validate if i can see the long description
 And I click the menu
 And I click the top seller menu
 And When i click on a product that is less the $1000
 And I click on the "<info>"
 Then I can see the "<info>"
 
 Examples:
 |info|
 |Description|
 
 @SmokeTest
 Scenario Outline: As a user, i want to validate if i can see the shipping info tab
 And I click the menu
 And I click the top seller menu
 And When i click on a product that is less the $1000
 And I click on the "<info>"
 Then I can see the "<info>"
 
 Examples:
 |info|
 |Shipping|
 
 @SmokeTest
 Scenario Outline: As a user, i want to validate if i can see technical info
 And I click the menu
 And I click the top seller menu
 And When i click on a product that is less the $1000
 And I click on the "<info>"
 Then I can see the "<info>"
 
 Examples:
 |info|
 |technical|
 
 @SmokeTest
 Scenario Outline: As a user, i want to validate if i can see Customer Reviews
 And I click the menu
 And I click the top seller menu
 And When i click on a product that is less the $1000
 And I click on the "<info>"
 Then I can see the "<info>"
 
 Examples:
 |info|
 |Reviews|
 