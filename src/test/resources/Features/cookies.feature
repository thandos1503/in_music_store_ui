#Author
 #Date
 #Description
 @SmokeScenario @Cookie
 Feature: Cookie Banner 
 
 Background: Launch website 

	Given I navigate to url 
 
 @SmokeTest 
 Scenario:
 As a user, i want to validate cookies 
 Then I should see the cookie banner 
 
 @SmokeTest 
 Scenario:
 As a user, i want to validate cookies banner does not appear when accept button is clicked 
 Then I should see the cookie banner
 When I click the Allow Cookies Button
 Then The Cookie Banner must not appear
 
 @SmokeTest 
 Scenario:
 As a user, i want to close the cookie banner validate cookies banner appears when page reloads
 Then I should see the cookie banner
 When I click the close cookie banner button
 Then I Reload the page
 Then I should see the cookie banner
