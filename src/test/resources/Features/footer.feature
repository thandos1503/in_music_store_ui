#Author
 #Date
 #Description
 @SmokeScenario @footer
 Feature: footer 
 
 Background: Launch website 

	Given I navigate to url 
 
 @SmokeTest 
 Scenario:
 As a user, i want to validate if i can navigate to the policy page
 Then I should see the cookie banner
 When I click the Allow Cookies Button
 Then I scroll to footer
 And I click the privacy page
 Then I am in the privacy page
 
 @SmokeTest 
 Scenario:
 As a user, i want to validate if i can navigate to the Terms page
 Then I should see the cookie banner
 When I click the Allow Cookies Button
 Then I scroll to footer
 And I click the Terms page
 Then I am in the terms of use page
 
 @SmokeTest 
 Scenario:
 As a user, i want to validate if secure payments exists
 Then I should see the cookie banner
 When I click the Allow Cookies Button
 Then I scroll to footer
  Then I can see the secure payments
 
 @SmokeTest 
 Scenario Outline:
 As a user, i want to validate all social media links navigate to appropriate pages
 Then I should see the cookie banner
 When I click the Allow Cookies Button
 Then I scroll to footer
 And I click on the "<FollowUs>" page
 Then I validate the "<FollowUs>" Links work
 
 Examples:
 |FollowUs|
 |facebook|
 |twitter|
 |instagam|
 
 @SmokeTest
 Scenario Outline:
 As a user, i want to validate all shop links are working
 Then I should see the cookie banner
 When I click the Allow Cookies Button
 Then I scroll to footer
 And I click on the "<shop>" page
 Then I validate the "<shop>" Links work
 
 Examples:
 |shop|
 |studio & Production|
 |Pianos & Keyboards|
 |Drums|
 |DJ|
 |Live Sound & PA|
 |Guitars|
 |Parts & Accessories|

 @SmokeTest 
 Scenario Outline:
 As a user, i want to validate all company info links are working
 Then I should see the cookie banner
 When I click the Allow Cookies Button
 Then I scroll to footer
 And I click on the "<info>" page
 Then I validate the "<info>" Links work
 
 Examples:
 |info|
 |About inMusic|
 |Careers|
 
 @SmokeTest 
 Scenario Outline:
 As a user, i want to validate all help links are working
 Then I should see the cookie banner
 When I click the Allow Cookies Button
 Then I scroll to footer
 And I click on the "<help>" page
 Then I validate the "<help>" Links work
 
 Examples:
 |help|
 |Help/Support|
 #|Software Support|
 #|Hardware Support|
 |Register a Product|
 |Shipping & Returns Policy|
 |Warranty Information|
 |Klarna Financing|
 |Dealer Locator|
 
 