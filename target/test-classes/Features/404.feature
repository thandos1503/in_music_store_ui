#Author
 #Date
 #Description
 @SmokeScenario @404 @regression
 Feature: 404 
 
 Background: Launch website 

	Given I navigate to url
	And I click the menu
	And I click the top seller menu

 @SmokeTest
 Scenario: As a user, i want to validate If i land on a page that no longer exists, I recieve a 404 error 
 And I update page url
 Then I validate if in am in the 404 page