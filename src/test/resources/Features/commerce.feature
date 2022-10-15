#Author
 #Date
 #Description
 @SmokeScenario @eCommerce
 Feature: Commerce
 
  Background: Launch website 

	Given I navigate to url 
 
 @SmokeTest
 Scenario: as a user, i want to validate when Country code is US Cart appear when the user is not Logged in
 Then I should see the cookie banner
 When I click the Allow Cookies Button
 Then I should see the shopping cart
 
 #@SmokeTest
 #Scenario: as a user, i want to Validate if Country Code is Not US, Cart does not appear 
 #Then I should see the cookie banner
 #When I click the Allow Cookies Button
 #Then Cart must not appear
 
 #@debug
 #Scenario: as a user, i want to validate that Rest RoW user Cannot Purchase Products 
 #Then I should see the cookie banner
 #When I click the Allow Cookies Button
 #Then Cart must not appear
 #And When i click on a product
 #Then Cart must not appear
 #Then There is no quantity on PDP
 ##Then There is not buy CTA on PDP 
 #Then Find a Dealer is on every PDP
 #Then Price is not listed
 #Then Klarna info is not on PDP
 ##Then Unique selling points are not on PDP
 