#Author
 #Date
 #Description
 @SmokeScenario @registration @gitlab
 Feature: Registration 
 
 Background: Launch website 

	Given I navigate to url 
 
 @SmokeTest 
 Scenario Outline: As a user, i want to validate if i can register 
 Then I should see the cookie banner
 When I click the close cookie banner button 
 And I click the account button
 When I click the Allow Cookies Button
 Then The account icon links to the account login page
 And I click create account button
 And Enter "<username>" And "<lastname>" And "<YOB>" And "<password>" And "<confirmpassword>"
 And Enter country USA
 And I click the Next Step
 And I click the brand
 And I click the Agree policy
 And I confirm creating account
 Then I should see the confirm page
 
 
 Examples:
 |email|username|lastname|YOB|password|confirmpassword|
 |samson@gmail.com|samson|jacobs|1978|Abc123##|Abc123##|