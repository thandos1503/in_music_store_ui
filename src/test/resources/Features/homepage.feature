#Author
 #Date
 #Description
 @SmokeScenario @homepage @gitlab
 Feature: HomePage 
 
 Background: Launch website 

	Given I navigate to url 
 
 @SmokeTest
 Scenario: As a user, i want to validate Home page loads all the content
 Then I should see the cookie banner
 When I click the close cookie banner button 
 Then The header includes the logo, account and help icons
 Then All content loads on page
 